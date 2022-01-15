import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: []
})
export class PublicModule { }
