import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
interface IAllByRoute{
  coachOwner: string;
  emptySeats: number;
  from: string;
  to: string;
  numberOfSeats: number;
  ticketPrice: string;
  schedule: string;
}
@Component({
  selector: 'app-datvexe',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent{
  datas:IAllByRoute[]=[];
  
  constructor(private routeService : DashboardService, public router: Router,){

  }
  getAllByRoute(){
    this.router.navigate(['/datvexe'])
  }
}
