import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuanLyChuyenDiService } from './quanlychuyendi.service';
interface Trips {
  id: string;
  from: string;
  to: string;
  departureTime: string;
  tripNo: string;
  minPrice: string;
}
@Component({
  selector: 'app-datvexe',
  templateUrl: './quanlychuyendi.component.html',
  styleUrls: ['./quanlychuyendi.component.scss']
})

export class QuanLyChuyenDiComponent implements OnInit{
  date = null;
  constructor(private tripService : QuanLyChuyenDiService, private router: Router) {}
  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.tripService.getAllTrips().subscribe((res: any)=>{
      this.listOfData = res;
   })
  }
  listOfData: Trips[] = [];
  isVisible = false;
  showModal(): void {
    this.router.navigate(['/taochuyendi'])
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  submitForm(): void {
  }
}
