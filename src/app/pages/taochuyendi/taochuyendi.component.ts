import { Component, OnInit } from '@angular/core';
import { TaoChuyenDiService } from './taochuyendi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface Trips {
  id: string;
  from: string;
  to: string;
  departureTime: string;
  tripNo: string;
  minPrice: string;
}
export interface IDiemdon {
  phoneNumber: string;
  address: string;
}
export interface IDiemtra {
  phoneNumber: string;
  address: string;
}
@Component({
  selector: 'app-datvexe',
  templateUrl: './taochuyendi.component.html',
  styleUrls: ['./taochuyendi.component.scss']
})

export class TaoChuyenDiComponent implements OnInit{
  isVisible = false;
  isVisible2 = false;
  validateForm!: FormGroup;
  constructor(public fb: FormBuilder) { }
  diemDon: IDiemdon[] = [];
  diemTra: IDiemtra[] = [];
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      seats: [null, [Validators.required]],
      layout: [null, [Validators.required]],
    });
  }
  phoneNumberDon = '0989898989';
  addressDon = 'Điểm đón test';

  phoneNumberTra = '0989898989';
  addressTra = 'Điểm trả test';
  showModal(): void {
    this.isVisible = true;
  }
  showModal2(): void {
    this.isVisible2 = true;
  }
themDiemDon(){
  const par = {
    phoneNumber: this.phoneNumberDon,
    address: this.addressDon,
  }
  this.diemDon.push(par);
  this.diemDon = [...this.diemDon];
  this.isVisible = false;
}

themDiemTra(){
  const par = {
    phoneNumber: this.phoneNumberTra,
    address: this.addressTra,
  }
  this.diemTra.push(par);
  this.diemTra = [...this.diemTra];
  this.isVisible2 = false;
}

handleCancel(): void {
  this.isVisible = false;
}
handleCancel2(): void {
  this.isVisible2 = false;
}
}
