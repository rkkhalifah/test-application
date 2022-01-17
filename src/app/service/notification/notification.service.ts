import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showNotification(type: string, subtitle: string, title: string) {
    switch(type){
      case 'success': {
        this.toastr.success(title, subtitle);
      }; break;
      case 'error': {
        this.toastr.error(title, subtitle);
      }; break;
      case 'info': {
        this.toastr.info(title, subtitle);
      }; break;
      default:{
        this.toastr.warning(title, subtitle);
      }
    }
    
  }
}
