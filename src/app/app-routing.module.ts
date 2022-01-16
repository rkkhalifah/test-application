import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './module/public/public.component';
import { HomeComponent } from './module/authenticated/home/home.component';
import { AddEmployeeComponent } from './module/authenticated/add-employee/add-employee.component';
import { RouteGuard } from './service/guard/route.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RouteGuard]
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent,
    canActivate: [RouteGuard]
  },
  {
    path: '',
    component: PublicComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
