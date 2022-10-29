import { Component, OnInit } from '@angular/core';
interface Person {
  key: string;
  name: string;
  bienso: string;
  loaixe: string;
  ngaydichuyen: string;
}
@Component({
  selector: 'app-datvexe',
  templateUrl: './quanlyxe.component.html',
  styleUrls: ['./quanlyxe.component.scss']
})

export class QuanLyXeComponent{
  date = null;
  constructor() {}
  listOfData: Person[] = [
    {
      key: '1',
      name: 'Nhà cái đến từ châu âu',
      bienso: '30L-99999',
      loaixe: 'Thưởng nạp đầu lên đến 20 triệu',
      ngaydichuyen: '12/12/2022'
    },
    {
      key: '2',
      name: 'Uy tín hàng đầu',
      bienso: '30L-66666',
      loaixe: 'Hoàn trả 20%',
      ngaydichuyen: '12/12/2022'
    },
    {
      key: '3',
      name: 'Đầu tư ngay',
      bienso: '30L-55555',
      loaixe: 'Nạp ngay',
      ngaydichuyen: '12/12/2022'
    },
    {
      key: '3',
      name: 'Đầu tư ngay',
      bienso: '30L-55555',
      loaixe: 'Nạp ngay',
      ngaydichuyen: '12/12/2022'
    },
    {
      key: '3',
      name: 'Đầu tư ngay',
      bienso: '30L-55555',
      loaixe: 'Nạp ngay',
      ngaydichuyen: '12/12/2022'
    },
    {
      key: '3',
      name: 'Đầu tư ngay',
      bienso: '30L-55555',
      loaixe: 'Nạp ngay',
      ngaydichuyen: '12/12/2022'
    },
    {
      key: '3',
      name: 'Đầu tư ngay',
      bienso: '30L-55555',
      loaixe: 'Nạp ngay',
      ngaydichuyen: '12/12/2022'
    },
    {
      key: '3',
      name: 'Đầu tư ngay',
      bienso: '30L-55555',
      loaixe: 'Nạp ngay',
      ngaydichuyen: '12/12/2022'
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
