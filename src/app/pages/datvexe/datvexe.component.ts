import { Component, OnInit } from '@angular/core';
import { DatVeXeService } from './datvexe.service';
interface AllByRoute{
  id: string,
  price: Number;
}
@Component({
  selector: 'app-datvexe',
  templateUrl: './datvexe.component.html',
  styleUrls: ['./datvexe.component.scss']
})
export class DatvexeComponent{
  array = ['Chúng tôi sẽ đưa đến cho bạn một trải nghiệm tốt nhất'];
  datas:AllByRoute[]=[];
  data = [
    {
      id: 1,
      name: 'Nhà xe test',
      diemdi: 'Hà Nội',
      diemtoi: 'Lào Cai',
      loaixe: '16 chỗ',
      giave: '100000',
      giodi: '12:00',
      gioden: '13:50',
      ghetrong: 10
    },
    {
      id: 2,
      name: 'Nhà xe xác ướp ai cập',
      diemdi: 'Hà Nội',
      diemtoi: 'Bắc Giang',
      loaixe: '30 chỗ',
      giave: '50000',
      giodi: '12:00',
      gioden: '13:50',
      ghetrong: 10
    },
    {
      id: 3,
      name: 'Nhà xe hihihaha',
      diemdi: 'Hà Nội',
      diemtoi: 'Hải Phòng',
      loaixe: '30 chỗ',
      giave: '70000',
      giodi: '12:00',
      gioden: '13:50',
      ghetrong: 10
    },
    {
      id: 4,
      name: 'Chuyến xe số 4',
      diemdi: 'Hà Nội',
      diemtoi: 'Quảng Ninh',
      loaixe: '16 chỗ',
      giave: '100000',
      giodi: '12:00',
      gioden: '13:50',
      ghetrong: 10
    },
    {
      id: 5,
      name: 'Chuyến xe số 5',
      diemdi: 'Hà Nội',
      diemtoi: 'Cần Thơ',
      loaixe: '30 chỗ',
      giave: '90000',
      giodi: '12:00',
      gioden: '13:50',
      ghetrong: 10
    }
  ];
  data2 = [
    {
      id: 1,
      trangthai: 0
    },
    {
      id: 2,
      trangthai: 0
    },
    {
      id: 3,
      trangthai: 2
    },
    {
      id: 4,
      trangthai: 0
    },
    {
      id: 5,
      trangthai: 2
    },
    {
      id: 6,
      trangthai: 2
    },
    {
      id: 7,
      trangthai: 2
    },
    {
      id: 8,
      trangthai: 2
    },
    {
      id: 9,
      trangthai: 0
    },
    {
      id: 10,
      trangthai: 2
    },
    {
      id: 11,
      trangthai: 2
    },
    {
      id: 12,
      trangthai: 2
    },
    {
      id: 13,
      trangthai: 0
    },
    {
      id: 14,
      trangthai: 2
    },
    {
      id: 15,
      trangthai: 0
    },
    {
      id: 16,
      trangthai: 0
    }
  ];

  date = null;

  isVisible = false;

  selectedValue = null;

  //điểm đi
  inputValue?: string;
  //điểm đến
  inputValue2?: string;
  filteredOptions: string[] = [];
  options = ['Hà Nội', 'Lạng Sơn', 'Yên Bái','Quảng Ninh','Hải Dương','Hải Phòng','TP Hồ Chí Minh','Bến Tre',
  'An Giang', 'Bà Rịa - Vũng Tàu', 'Bắc Giang','Bắc Kạn','Bạc Liêu','Bắc Ninh','Bình Định','Bình Dương','Bình Phức',
  'Bình Thuận','Cà Mau','Cần Thơ','Cao Bằng','Đà Nẵng','Đắk Lắk','Đắk Nông','Điện Biên','Đồng Nai','Đồng Tháp'
  ,'Gia Lai','Hà Giang','Hà Nam','Hà Tĩnh','Hậu Giang','Hòa Bình','Hưng Yên','Khánh Hòa','Kiên Giang','Kon Tum',
  'Lai Châu','Lâm Đồng','Lào Cai','Long An','Nam Định','Nghệ An','Ninh Bình','Ninh Thuận','Phú Thọ','Phú Yên','Quảng Bình',
  
];

  constructor(private routeService : DatVeXeService) {this.filteredOptions = this.options; }

  ngOnInit(): void {
  }

  chuyenMau(item: any) {

    if (this.data2[item].trangthai == 1)
      this.data2[item].trangthai = 0;
    else
      this.data2[item].trangthai = 1;
  }

  test(item: any) {
    console.log('data', item);
    this.isVisible = true;
  }

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
  onChange(value: string): void {
    this.filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
  

  getAllByRoute(){
    const params ={
      from : this.inputValue,
      to: this.inputValue2,
      departuretime: this.date
    }
    this.routeService.getAllByRoute(params).subscribe((res: any)=>{
       this.datas = res;
    })
  }
}
