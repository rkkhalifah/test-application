import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() public page = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  redirect(data: string){
    this.page.emit(data);
  }

}
