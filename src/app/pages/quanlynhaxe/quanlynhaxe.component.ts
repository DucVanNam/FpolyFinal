import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { QuanLyNhaXeService } from './quanlynhaxe.service';

interface CoachOwners {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phoneNumber: string;
  email: string;
  nationality: string;
  identityNo: string;
  lisenseNo: string;
  address: string;

}
@Component({
  selector: 'app-quanlynhaxe',
  templateUrl: './quanlynhaxe.component.html',
  styleUrls: ['./quanlynhaxe.component.scss']
})
export class QuanlynhaxeComponent implements OnInit {

  iscreup: boolean = true;
  confirmModal?: NzModalRef;
  date = null;
  constructor(private CoachOwnerService: QuanLyNhaXeService, public fb: FormBuilder, private message: NzMessageService, private modal: NzModalService,) { }
  listOfData: CoachOwners[] = [];
  isVisible = false;
  validateForm!: FormGroup;
  listOfFormDto = {
    id: null,
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    phoneNumber: null,
    email: null,
    nationality: null,
    identityNo: null,
    lisenseNo: null,
    address: null,
  }

  ngOnInit(): void {
    this.getall();
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      email: [null, [Validators.required]],
      nationality: [null, [Validators.required]],
      identityNo: [null, [Validators.required]],
      lisenseNo: [null, [Validators.required]],
      address: [null, [Validators.required]],

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
    if (this.validateForm.valid) {
      let params = {
        firstName: this.listOfFormDto.firstName,
        lastName: this.listOfFormDto.lastName,
        dateOfBirth: this.listOfFormDto.dateOfBirth,
        phoneNumber: this.listOfFormDto.phoneNumber,
        email: this.listOfFormDto.email,
        nationality: this.listOfFormDto.nationality,
        identityNo: this.listOfFormDto.identityNo,
        lisenseNo: this.listOfFormDto.lisenseNo,
        address: this.listOfFormDto.address,

      };
      this.CoachOwnerService.create(params).subscribe((res: any) => {
        if (res) {
          this.successMessage();
          this.handleCancel();
          this.getall();
        }
        else {
          this.errorMessage();
        }
      });
    }
    else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  getall() {
    this.CoachOwnerService.getAll().subscribe((res: any) => {
      this.listOfData = res;
    })
  }
  handleCancel(): void {
    this.listOfFormDto = {
      id: null,
      firstName: null,
      lastName: null,
      dateOfBirth: null,
      phoneNumber: null,
      email: null,
      nationality: null,
      identityNo: null,
      lisenseNo: null,
      address: null,
    };
    this.isVisible = false;
  }

  delete(record: any) {
    console.log('record', record.id);
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Xác nhận xóa bản ghi?',
      nzContent: 'Bạn có chắc muốn xóa bản ghi này không?',
      nzOnOk: () => {
        this.CoachOwnerService.deleteCoachOwners(record.id).subscribe((res: any) => {
          this.successDeleteMessage();
          this.getall();
        })
      }
    });
  }

  update() {
    if (this.validateForm.valid) {
      let params = {
        firstName: this.listOfFormDto.firstName,
        lastName: this.listOfFormDto.lastName,
        dateOfBirth: this.listOfFormDto.dateOfBirth,
        phoneNumber: this.listOfFormDto.phoneNumber,
        email: this.listOfFormDto.email,
        nationality: this.listOfFormDto.nationality,
        identityNo: this.listOfFormDto.identityNo,
        lisenseNo: this.listOfFormDto.lisenseNo,
        address: this.listOfFormDto.address,

      }
      this.CoachOwnerService.update(params, this.listOfFormDto.id).subscribe((res: any) => {
        this.successUpdateMessage();
        this.handleCancel();
        this.getall();
      })
    }
    else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  updateNhaxe(item: any) {
    this.iscreup = false
    this.listOfFormDto.id = item.id;
    this.listOfFormDto.firstName = item.firstName;
    this.listOfFormDto.lastName = item.lastName;
    this.listOfFormDto.dateOfBirth = item.dateOfBirth;
    this.listOfFormDto.phoneNumber = item.phoneNumber;
    this.listOfFormDto.email = item.email;
    this.listOfFormDto.nationality = item.nationality;
    this.listOfFormDto.identityNo = item.identityNo;
    this.listOfFormDto.lisenseNo = item.lisenseNo;
    this.listOfFormDto.address = item.address;
    this.isVisible = true;
    console.log('LastName', this.listOfFormDto.lastName);

  }
  // Export(){
  //   const EXCEL_TYPE ='application/vnd.openxmlformats-officedocumnet.spreadsheetml.sheet;charset=UTF-8';
  //   const EXCEL_EXTENSION ='.xlsx';

  //   const worksheet = XLSX.utils.json_to_sheet(this.listOfData);

  //   const workbook ={
  //     Sheets:{
  //       'testingSheet':worksheet
  //     },
  //     SheetNames:['testingSheet']
  //   }
  //   const excelBuffer = XLSX.write(workbook,{bookType:'xlsx',type:'array'});

  //   const blobData = new Blob([excelBuffer],{type:EXCEL_TYPE});
  //   this.FilerSaver.save(blobData,'demoFile')
  // }

}
