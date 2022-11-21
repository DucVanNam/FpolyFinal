import { Injectable } from '@angular/core';
import { ServiceBaseService } from 'src/app/services/service-base.service';

@Injectable({
  providedIn: 'root'
})
export class QuanLyNhaXeService extends ServiceBaseService{
 getAll(){
    return this.get(`api/CoachOwners/Getall`);
 }
 create(params: any){
  return this.post(`api/CoachOwners/Create`, params);
 }
 deleteCoachOwners(id: any){
  return this.delete(`api/CoachOwners/Delete/${id}`);
}
update(params: any, id: any){
  return this.put(`api/CoachOwners/Update/${id}`, params);
}

}