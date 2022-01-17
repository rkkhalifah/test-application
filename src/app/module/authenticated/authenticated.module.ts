import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent} from './home/home.component';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatepickerModule } from 'ngx-date-picker';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddEmployeeComponent,
    DetailEmployeeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    OrderModule,
    NgxPaginationModule,
    NgSelectModule
  ],
  providers: []
})
export class AuthenticatedModule { }
