import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../../service/common/common.service';
import { NotificationService } from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() public page = new EventEmitter();
  loginForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private commonService: CommonService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.required),
    });

    let dataUser = JSON.parse(localStorage.getItem("user"));

    //Initial login Data
    let user = [{
      email: 'test-dev@gmail.com',
      password: 'qwerty123'
    }];

    if(dataUser == null)  localStorage.setItem('user', JSON.stringify(user));
  }

  redirect(data: string){
    this.page.emit(data);
  }

  signIn(){
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;

    let isAuthenticated: boolean = this.commonService.loginService(email, password);

    if(isAuthenticated) {
      this.notificationService.showNotification('success', 'Loged in !', 'Login Success');
      this.router.navigate(['/home']);
    }
    else{
      this.notificationService.showNotification('error', 'UnAuthorize', 'Invalid email or Password');
    }
     
  }

}
