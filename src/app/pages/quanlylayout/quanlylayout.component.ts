import { Component, OnInit } from '@angular/core';

interface Person {
  key: string;
  Name: string;
  Value: string;
  NumberOfDeckers: string;
}
@Component({
  selector: 'app-quanlylayout',
  templateUrl: './quanlylayout.component.html',
  styleUrls: ['./quanlylayout.component.scss']
})
export class QuanlylayoutComponent {
  date = null;
  constructor() { }
  listOfData: Person[] = [
    {
      key: '1',
      Name: 'Gi được nhỉ',
      Value: '123',
      NumberOfDeckers: '1'
    },
    {
      key: '1',
      Name: 'Gi được nhỉ',
      Value: '123',
      NumberOfDeckers: '1'
    },
    {
      key: '1',
      Name: 'Gi được nhỉ',
      Value: '123',
      NumberOfDeckers: '1'
    },
    {
      key: '1',
      Name: 'Gi được nhỉ',
      Value: '123',
      NumberOfDeckers: '1'
    },
    {
      key: '1',
      Name: 'Gi được nhỉ',
      Value: '123',
      NumberOfDeckers: '1'
    },
    {
      key: '1',
      Name: 'Gi được nhỉ',
      Value: '123',
      NumberOfDeckers: '1'
    },
    {
      key: '1',
      Name: 'Gi được nhỉ',
      Value: '123',
      NumberOfDeckers: '1'
    },
    {
      key: '1',
      Name: 'Gi được nhỉ',
      Value: '123',
      NumberOfDeckers: '1'
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
