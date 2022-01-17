import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotificationService } from 'src/app/service/notification/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() public page = new EventEmitter();
  buttonHit: boolean;
  
  constructor( private notificationService: NotificationService) { }

  ngOnInit() {
    this.buttonHit = false;
  }

  register(){
    this.notificationService.showNotification('info', 'Opps', 'Its not ready yet');
    this.buttonHit = true;
  }

  goToPage(){
    this.page.emit('login-page');
  }

}
