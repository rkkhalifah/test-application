import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee/employee.model';
import { CommonService } from 'src/app/service/common/common.service';
import { NotificationService } from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.scss']
})
export class DetailEmployeeComponent implements OnInit {
  usernameParameter: string;
  employee: Employee;
  group: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.group = this.commonService.getGroup();

    this.activatedRoute.queryParams.subscribe((data) => {
      this.usernameParameter = data['username'];
    });

    this.employee = this.commonService.getEmployee(this.usernameParameter);
    this.employee.birthDate = new Date(this.employee.birthDate);
  }

  goToPage(){
    this.router.navigate(['/home']);
  }

  saveEmployee(){
    this.notificationService.showNotification('info', 'Opps', 'Feature not set yet')
  }

}
