import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee/employee.model';
import { CommonService } from 'src/app/service/common/common.service';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employeeList: Employee[];
  firstName: String;
  p: number = 1;

  constructor(
    private commonService: CommonService, 
    private router: Router, 
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.jsonEmployee();
    this.employeeList = JSON.parse(localStorage.getItem("employee"));
  }

  jsonEmployee(){
    let dataEmployee = JSON.parse(localStorage.getItem("employee"));

    if(dataEmployee == null)  localStorage.setItem('employee', JSON.stringify(this.commonService.createJson()));
  }

  search(){
    if(this.firstName == ""){
      this.ngOnInit();
    }
    else if(this.employeeList.length == 0 && this.firstName !== ""){
      this.ngOnInit();
      this.employeeList = this.employeeList.filter(res => {
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
    else{
      this.employeeList = this.employeeList.filter(res => {
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }

  key: string = 'id';
  reverse: boolean = false;
  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }

  goToPage(page: string, username: string){
    switch(page){
      case 'add-employee':{
        this.router.navigate(['/add-employee']);
      }; break;
      case 'edit':{
        this.router.navigate(['/detail-employee'], {
          queryParams: {
            username: username,
          },
          replaceUrl: true,
        });
      }; break;
      case 'delete':{
        this.notificationService.showNotification('error', 'Coming Soon', 'Delete Page is Not Available');
      }; break;
      case 'login':{
        this.router.navigate(['/login']);
        this.notificationService.showNotification('error', 'logout', 'User loged out !');
      }; break;
    }
  }

  async delete(username: string){
    await this.commonService.deleteEmployee(username);

    this.ngOnInit();
  }

}
