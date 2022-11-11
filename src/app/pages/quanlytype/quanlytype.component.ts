import { Component, OnInit } from '@angular/core';

interface Person {
  key: string;
  Name: string;
  Seats: string;
}
@Component({
  selector: 'app-quanlytype',
  templateUrl: './quanlytype.component.html',
  styleUrls: ['./quanlytype.component.scss']
})
export class QuanlytypeComponent  {

  date = null;
  constructor() { }
  listOfData: Person[] = [
    {
      key: '1',
      Name: 'Gi được nhỉ',
      Seats: '123',
    },
    {
      key: '1',
      Name: 'Gi được nhỉ',
      Seats: '123',
    },
    {
      key: '1',
      Name: 'Gi được nhỉ',
      Seats: '123',
    },
    {
      key: '1',
      Name: 'Gi được nhỉ',
      Seats: '123',
    },
    {
      key: '1',
      Name: 'Gi được nhỉ',
      Seats: '123',
    },
    {
      key: '1',
      Name: 'Gi được nhỉ',
      Seats: '123',
    },
    {
      key: '1',
      Name: 'Gi được nhỉ',
      Seats: '123',
    },
    {
      key: '1',
      Name: 'Gi được nhỉ',
      Seats: '123'
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
