import { Injectable } from '@angular/core';
import { ServiceBaseService } from 'src/app/services/service-base.service';

@Injectable({
  providedIn: 'root'
})
export class QuanLyChuyenDiService extends ServiceBaseService{
 getAllTrips(){
    return this.get(`api/trip`);
 }

}