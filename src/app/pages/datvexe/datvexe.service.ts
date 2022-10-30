import { Injectable } from '@angular/core';
import { ServiceBaseService } from 'src/app/services/service-base.service';

@Injectable({
  providedIn: 'root'
})
export class DatVeXeService extends ServiceBaseService{
 getAllByRoute(params: any){
    return this.post(`api/Coach/get-all-by-route`, params);
 }

 getDetailByRoute(params: any){
  return this.post(`api/Coach/get-coach-detail`, params);
}

}