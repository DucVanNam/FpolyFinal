import { Injectable } from '@angular/core';
import { ServiceBaseService } from 'src/app/services/service-base.service';

@Injectable({
  providedIn: 'root'
})
export class QuanLyTypeService extends ServiceBaseService{
 getAll(){
    return this.get(`api/Type`);
 }
 getInfoForCreateType(){
  return this.get(`api/Type/info`);
}
create(params: any){
  return this.post(`api/Type/create`, params);
}

}