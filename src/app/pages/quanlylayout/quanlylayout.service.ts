import { Injectable } from '@angular/core';
import { ServiceBaseService } from 'src/app/services/service-base.service';

@Injectable({
  providedIn: 'root'
})
export class QuanLyLayoutService extends ServiceBaseService{
 getAll(){
    return this.get(`api/Layout/Getall`);
 }
 create(params: any){
  return this.post(`api/Layout/Create`, params);
 }
 deleteLayout(id: any){
  return this.post(`api/Layout/Delete/${id}`, null);
}
update(params: any, id: any){
  return this.put(`api/Layout/Update/${id}`, params);
}

}