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
  return this.delete(`api/Layout/Delete/${id}`);
}
update(params: any){
  return this.put(`/api/Layout/Update/${params.id}`, params);
}

}