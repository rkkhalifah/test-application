import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../common/common.service';
import { NotificationService } from '../notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(private router: Router, private commonService: CommonService, private notificationService: NotificationService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.commonService.isAuthenticated()){
        return true;
      }
      else{
        this.notificationService.showNotification('info', 'unAuthorized', 'Please login to access this page');
        this.router.navigate(['']);
        return false;
      }
  }
  
}
