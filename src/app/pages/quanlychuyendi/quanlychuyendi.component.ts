import { Component, OnInit } from '@angular/core';
interface Person {
  key: string;
  From: string;
  To: string;
  DepartureTime: string;
  TripNo: string;
  MinPrice: string;
}
@Component({
  selector: 'app-datvexe',
  templateUrl: './quanlychuyendi.component.html',
  styleUrls: ['./quanlychuyendi.component.scss']
})

export class QuanLyChuyenDiComponent{
  date = null;
  constructor() {}
  listOfData: Person[] = [
    {
      key: '1',
      From: 'Hà Nội',
      To: 'Hải Phòng',
      DepartureTime: '11/10/2022',
      TripNo: 'No11',
      MinPrice:'123000'
    },
    {
      key: '1',
      From: 'Hà Nội',
      To: 'Hải Phòng',
      DepartureTime: '11/10/2022',
      TripNo: 'No11',
      MinPrice:'123000'
    },
    {
      key: '1',
      From: 'Hà Nội',
      To: 'Hải Phòng',
      DepartureTime: '11/10/2022',
      TripNo: 'No11',
      MinPrice:'123000'
    },
    {
      key: '1',
      From: 'Hà Nội',
      To: 'Hải Phòng',
      DepartureTime: '11/10/2022',
      TripNo: 'No11',
      MinPrice:'123000'
    },
    {
      key: '1',
      From: 'Hà Nội',
      To: 'Hải Phòng',
      DepartureTime: '11/10/2022',
      TripNo: 'No11',
      MinPrice:'123000'
    },
    {
      key: '1',
      From: 'Hà Nội',
      To: 'Hải Phòng',
      DepartureTime: '11/10/2022',
      TripNo: 'No11',
      MinPrice:'123000'
    },
    {
      key: '1',
      From: 'Hà Nội',
      To: 'Hải Phòng',
      DepartureTime: '11/10/2022',
      TripNo: 'No11',
      MinPrice:'123000'
    },
    {
      key: '1',
      From: 'Hà Nội',
      To: 'Hải Phòng',
      DepartureTime: '11/10/2022',
      TripNo: 'No11',
      MinPrice:'123000'
    }
  ];
  isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
