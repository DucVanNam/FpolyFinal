import { Injectable } from '@angular/core';
import { ServiceBaseService } from 'src/app/services/service-base.service';

@Injectable({
  providedIn: 'root'
})
export class TaoChuyenDiService extends ServiceBaseService{
  create(params: any){
    return this.post(`api/Coach`, params);
  }
}