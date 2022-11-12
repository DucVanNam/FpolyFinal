import { Injectable } from '@angular/core';
import { ServiceBaseService } from 'src/app/services/service-base.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends ServiceBaseService{
 getAllByRoute(params: any){
  return this.post(`api/Coach/get-all-by-route`, params);
 }

}