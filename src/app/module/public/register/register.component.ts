import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() public page = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  register(){
    this.page.emit('login-page');
  }

}
