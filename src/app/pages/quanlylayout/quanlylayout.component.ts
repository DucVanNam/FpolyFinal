import { Component, OnInit } from '@angular/core';
import { QuanLyLayoutService } from './quanlylayout.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

interface Layout {
  name: string;
  value: string;
  numberOfDeckers: Number;
}
@Component({
  selector: 'app-quanlylayout',
  templateUrl: './quanlylayout.component.html',
  styleUrls: ['./quanlylayout.component.scss']
})
export class QuanlylayoutComponent implements OnInit {
  //true tạo, false sửa
  iscreup : boolean = true;
  confirmModal?: NzModalRef;
  date = null;
  constructor(private layoutService : QuanLyLayoutService, public fb: FormBuilder, private message: NzMessageService, private modal: NzModalService) { }
  listOfData: Layout[]=[];
  isVisible = false;
  validateForm!: FormGroup;
  listOfFormDto = {
    id: null,
    name : null,
    value: null,
    numberOfDeckers: 0
  }

  ngOnInit(): void {
    this.getall();
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      value: [null, [Validators.required]],
      numberofdeckers: [null, [Validators.required]],
    });
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
  errorMessage(): void {
    this.message.create('error', 'Có lỗi xảy ra trong quá trình tạo');
  }

  showModal(): void {
    this.isVisible = true;
    this.iscreup = true;
  }
  create(): void {
    if(this.validateForm.valid){
      let params = {
        name: this.listOfFormDto.name,
        value: this.listOfFormDto.value,
        numberOfDeckers: this.listOfFormDto.numberOfDeckers,
      };
      this.layoutService.create(params).subscribe((res: any) => {
        if (res) {
          this.successMessage();
          this.handleCancel();
          this.getall();
        }
        else{
          this.errorMessage();
        }
      });
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
      value: null,
      numberOfDeckers: 0
    };
    this.isVisible = false;
  }
getall(){
  this.layoutService.getAll().subscribe((res: any)=>{
    this.listOfData = res;
 })
}

delete(record: any){
  console.log('record',record.id);
  this.confirmModal = this.modal.confirm({
    nzTitle: 'Xác nhận xóa bản ghi?',
    nzContent: 'Bạn có chắc muốn xóa bản ghi này không?',
    nzOnOk: () =>{
      this.layoutService.deleteLayout(record.id).subscribe((res: any)=>{
        this.successDeleteMessage();
        this.getall();
     })
    }
  });
}

update(){
  if(this.validateForm.valid){
    let params = {
      name: this.listOfFormDto.name,
      value: this.listOfFormDto.value,
      numberOfDeckers: this.listOfFormDto.numberOfDeckers,
    }
    this.layoutService.update(params, this.listOfFormDto.id).subscribe((res: any)=>{
      this.successUpdateMessage();
      this.handleCancel();
      this.getall();
   })
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

updateLayout(item: any){
  this.iscreup = false
  this.listOfFormDto.id = item.id;
  this.listOfFormDto.name = item.name;
  this.listOfFormDto.numberOfDeckers = item.numberOfDeckers;
  this.listOfFormDto.value = item.value;
  this.isVisible = true;
  console.log('name', this.listOfFormDto.name);
  
}

}

