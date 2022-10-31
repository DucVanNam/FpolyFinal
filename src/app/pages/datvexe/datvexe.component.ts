import { Component, OnInit } from '@angular/core';
import { DatVeXeService } from './datvexe.service';
interface IAllByRoute{
  coachOwner: string;
  emptySeats: number;
  from: string;
  to: string;
  numberOfSeats: number;
  ticketPrice: string;
  schedule: string;
}

interface IDetailCoach{
  dropOffs: IDropOffs [];
  price: Number;
  reverse: boolean;
  seats: ISeats [];
  pickups: IPickups [];
}
interface ISeats{
  customPrice: Number;
  seatNo: Number;
  status: Number;
}
interface IPickups{
  address: string;
}
interface IDropOffs{
  address: string;
}
@Component({
  selector: 'app-datvexe',
  templateUrl: './datvexe.component.html',
  styleUrls: ['./datvexe.component.scss']
})
export class DatvexeComponent{
  array = ['Chúng tôi sẽ đưa đến cho bạn một trải nghiệm tốt nhất'];
  datas:IAllByRoute[]=[];
  datatest:IDetailCoach[]=[];
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
  radioValue = '';
  radioValue2 = '';
  date = null;

  current = 0;
  index = 0;

  isVisible = false;
  isVisible2 = false;

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
    if (item.status == 1)
      item.status = 2;
    else
      item.status = 1;
  }

  thongtin(item: any) {
    console.log('data', item);
    this.isVisible = true;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.isVisible2 = false;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isVisible2 = false;
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

  datve(item: any) {
    const params ={
      coachId: item.id
    }
    console.log('data', item);
    this.routeService.getDetailByRoute(params).subscribe((res: any)=>{
      this.datatest = res;
      console.log('data', this.datatest);

   })
    this.isVisible2 = true;
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 0;
        break;
      }
      case 1: {
        this.index = 1;
        break;
      }
      case 2: {
        this.index = 2;
        break;
      }
      default: {
        this.index = 3;
      }
    }
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }
}
