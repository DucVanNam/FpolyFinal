import { Injectable } from '@angular/core';
import { ServiceBaseService } from 'src/app/services/service-base.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends ServiceBaseService{
 login(param: any){
    return this.post(`api/Auth/authenticate`, param);
 }

}