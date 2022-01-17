import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { Employee } from 'src/app/model/employee/employee.model';
import { CommonService } from 'src/app/service/common/common.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employeeList: Employee[];
  employeeForm: FormGroup;
  group: any[];

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private notificationService: NotificationService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.group = this.commonService.getGroup();
    
    this.employeeForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      birthDate: new FormControl('', Validators.required),
      basicSalary: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[0-9]*$")])),
      status: new FormControl('', Validators.required),
      group: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  goToPage(){
    this.router.navigate(['/home']);
  }

  addEmployee(){
    let form = this.employeeForm.value;
    let formDate = this.trimDate(new Date(form.birthDate)); 
    let today = this.trimDate(new Date());

    if(formDate > today){
      this.notificationService.showNotification('error', 'Error', 'Date cannot be less than the current date');
      
      return;
    }
    
    this.pushData(form);
  };

  trimDate(t: any) {
    const date = ('0' + t.getDate()).slice(-2);
    const month = ('0' + (t.getMonth() + 1)).slice(-2);
    const year = t.getFullYear();
    return `${date}/${month}/${year}`;
  }

  pushData(form: any){
    this.employeeList = JSON.parse(localStorage.getItem("employee"));
    this.employeeList.push(form);

    localStorage.setItem('employee', JSON.stringify(this.employeeList));
    this.notificationService.showNotification('success', 'Success', 'Data Successfully Added !');
    this.router.navigate(['/home']);
  }

}
