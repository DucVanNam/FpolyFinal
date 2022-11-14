import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { QuanLyTypeService } from './quanlyxe.service';

interface ILayout {
  id: string;
  name: string;
  value: string;
  numberOfDeckers: Number;
}
interface ISeats {
  lable: string;
  value: number;
};
interface Type {
  name: string;
  seats: string;
}
@Component({
  selector: 'app-quanlytype',
  templateUrl: './quanlytype.component.html',
  styleUrls: ['./quanlytype.component.scss']
})
export class QuanlytypeComponent implements OnInit {
  constructor(private typeService : QuanLyTypeService, public fb: FormBuilder, private message: NzMessageService, private modal: NzModalService) { }
  ngOnInit(): void {
    this.getInfoForCreateType();
    this.getall();
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      seats: [null, [Validators.required]],
      layout: [null, [Validators.required]],
    });
  }
  validateForm!: FormGroup;
  listOfData: Type[] = [];
  infoLayout: ILayout[] = [];
  isVisible = false;
  selectedValue = null;
  selectedValueSeat = null;
  seats: ISeats[] = [
    {
      lable: '16 chỗ',
      value: 16,
    },
    {
      lable: '30 chỗ',
      value: 30
    },
    {
      lable: '45 chỗ',
      value: 45
    }
  ];

  listOfFormDto = {
    id: null,
    name : null,
    seats: null,
    layoutId: null
  }
  successMessage(): void {
    this.message.create('success', 'Tạo mới thành công');
  }
  successDeleteMessage(): void {
    this.message.create('success', 'Xóa bản ghi thành công');
  }
  successUpdateMessage(): void {
    this.message.create('success', 'Sửa bản ghi thành công');
  }
  getall(){
    this.typeService.getAll().subscribe((res: any)=>{
      this.listOfData = res;
   })
  }

  getInfoForCreateType(){
    this.typeService.getInfoForCreateType().subscribe((res: any)=>{
      this.infoLayout = res;
   })
  }

  showModal(): void {
    this.isVisible = true;
  }
  create(): void {
    if(this.validateForm.valid){
      let params = {
        name: this.listOfFormDto.name,
        seats: this.listOfFormDto.seats,
        layoutId: this.listOfFormDto.layoutId,
      };
      this.typeService.create(params).subscribe((res: any) => {
        if (res) {
          this.successMessage();
          this.handleCancel();
          this.getall();
        }
      });
      this.isVisible = false;
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

  handleCancel(): void {
    this.listOfFormDto = {
      id: null,
      name : null,
      seats: null,
      layoutId: null
    }
    this.isVisible = false;
  }

}
