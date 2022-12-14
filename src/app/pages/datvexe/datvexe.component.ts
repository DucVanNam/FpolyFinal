import { Component, OnInit } from '@angular/core';
import { DatVeXeService } from './datvexe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
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
  id: string;
  customPrice: Number;
  seatNo: Number;
  status: Number;
}
interface IPickups{
  id: string;
  address: string;
}
interface IDropOffs{
  id: string;
  address: string;
}
@Component({
  selector: 'app-datvexe',
  templateUrl: './datvexe.component.html',
  styleUrls: ['./datvexe.component.scss']
})
export class DatvexeComponent implements OnInit{

  isHienthi = false;
  validateForm!: FormGroup;

  array = ['Chúng tôi sẽ đưa đến cho bạn một trải nghiệm tốt nhất'];
  datas:IAllByRoute[]=[];
  datatest:IDetailCoach[]=[];

  data: ISeats[] = [];
  radioValue = '';
  radioValue2 = '';
  date = null;
  soDienThoai = '';
  hoTen = ''
  email = '';
  totalPaymentAmount = 0;
  current = 0;
  index = 0;

  isVisible = false;
  isVisible2 = false;

  selectedValue = null;
  timeout: any = null;
  //điểm đi
  inputValue?: string;
  //điểm đến
  inputValue2?: string;
  filteredOptions: string[] = [];
  count = 0;
  options = ['Hà Nội', 'Lạng Sơn', 'Yên Bái','Quảng Ninh','Hải Dương','Hải Phòng','TP Hồ Chí Minh','Bến Tre',
  'An Giang', 'Bà Rịa - Vũng Tàu', 'Bắc Giang','Bắc Kạn','Bạc Liêu','Bắc Ninh','Bình Định','Bình Dương','Bình Phức',
  'Bình Thuận','Cà Mau','Cần Thơ','Cao Bằng','Đà Nẵng','Đắk Lắk','Đắk Nông','Điện Biên','Đồng Nai','Đồng Tháp'
  ,'Gia Lai','Hà Giang','Hà Nam','Hà Tĩnh','Hậu Giang','Hòa Bình','Hưng Yên','Khánh Hòa','Kiên Giang','Kon Tum',
  'Lai Châu','Lâm Đồng','Lào Cai','Long An','Nam Định','Nghệ An','Ninh Bình','Ninh Thuận','Phú Thọ','Phú Yên','Quảng Bình',
  
];

   
  constructor(private routeService : DatVeXeService, public router: Router, private modal: NzModalService, public fb: FormBuilder) {
    
    this.filteredOptions = this.options; 

  }
  
  tru(){
    if(this.count >0){
      this.count--;
    }
  }
  cong(){
    this.count++;
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });
  }
  

  chuyenMau(item: any) {
    if (item.status == 1){
        item.status = 2;

    }
    else{
      item.status = 1;
    }
    if(this.data.length != 0){
      for(let i = 0; i<this.data.length; i++){
        if(item.id == this.data[i].id && item.status == 1){
           this.data = this.data.filter(x => x.id != this.data[i].id)
           this.totalPaymentAmount -= item.customPrice;
           break;
        }
        else if(item.status == 2){
          this.totalPaymentAmount += item.customPrice;
          this.isHienthi = true;
          this.data.push(item);
          break;
        }
      }
    }
    else{
      this.data.push(item);
      this.isHienthi = true;
      this.totalPaymentAmount += item.customPrice;
    }
  }

  thongtin(item: any) {
    console.log('data', item);
    this.isVisible = true;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.radioValue = '';
    this.radioValue2 = '';
    this.soDienThoai = '';
    this.hoTen = ''
    this.email = '';
    this.totalPaymentAmount = 0;
    this.isVisible2 = false;
    this.current = 0;
    this.index = 0;
    this.count = 0;
    this.data = [];
  }
  onChange(value: string): void {
    this.filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
  
  getAllByRoute(){
    if(this.inputValue == '' || this.inputValue2 == '' || this.date == null){
      this.modal.error({
        nzTitle: 'Lỗi',
        nzContent: 'Vui lòng nhập đầy đủ thông tin tìm kiếm'
      })
    }
    else{
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

  datve(item: any) {

    const params ={
      coachId: item.id
    }
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    }

    this.routeService.getDetailByRoute(params).subscribe((res: any)=>{
      this.datatest = res;
      this.radioValue = item.pickups[0].id,
      this.radioValue2 = item.dropOffs[0].id,
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
      default: {
        this.index = 2;
      }
    }
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    if(this.data.length == 0 && this.count == 0){
      this.modal.error({
        nzTitle: 'Lỗi',
        nzContent: 'Vui lòng chọn ít nhất 1 ghế'
      })
    }
    else{
      this.current += 1;
      this.changeContent();
    }

  }

  thanhtoan(): void {
    if(this.validateForm.valid){
      const params ={
        name: this.hoTen,
        email: this.email,
        phone: this.soDienThoai,
        totalPaymentAmount: this.totalPaymentAmount,
        details : this.data
      }
      this.routeService.BookingVe(params).subscribe((res: any)=>{
     })
  
     clearTimeout(this.timeout);
     const $this = this;
     this.timeout = setTimeout(() => {
      window.open('https://localhost:44393/' ,'_blank')
     }, 2000);
      this.handleCancel();
    }
    else{
      Object.values(this.validateForm.controls).forEach(control =>{
        if(control.invalid){
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }

  }

  handleChonCho(): void {
    this.isHienthi = false;
  }

  handleCancelChonCho(): void{
    this.isHienthi = false;
    console.log('điểm đón', this.radioValue);
    console.log('điểm trả', this.radioValue2);
  }
}
