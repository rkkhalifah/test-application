import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee/employee.model';
import { CommonService } from 'src/app/service/common/common.service';
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

  constructor(private commonService: CommonService, private router: Router) { }

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

  goToPage(page: string){
    switch(page){
      case 'add-employee':{
        this.router.navigate(['/add-employee']);
      }; break;
      case 'edit':{
        this.router.navigate(['/add-employee']);
      }; break;
      case 'delete':{
        this.router.navigate(['/add-employee']);
      }; break;
    }
    
  }

}
