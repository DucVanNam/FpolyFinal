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
interface IFrom {
  lable: string;
  value: string;
};

interface ITo {
  lable: string;
  value: number;
};

interface IType {
  id: string;
  name: string;
  value: string;
  numberOfDeckers: Number;
  seats: Number
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
  formDon!: FormGroup;
  formTra!: FormGroup;
  selectedValue = null;
  date = null;

  address: IFrom[] = [
    {
      lable: 'An Giang',
      value: 'An Giang',
    },
    {
      lable: 'Bà Rịa – Vũng Tàu',
      value: 'Bà Rịa – Vũng Tàu'
    },
    {
      lable: 'Bắc Giang',
      value: 'Bắc Giang'
    },
    {
      lable: 'Bắc Kạn',
      value: 'Bắc Kạn'
    },
    {
      lable: 'Bạc Liêu',
      value: 'Bạc Liêu'
    },
    {
      lable: 'Bắc Ninh',
      value: 'Bắc Ninh'
    },
    {
      lable: 'Bến Tre',
      value: 'Bến Tre'
    },
    {
      lable: 'Bình Định',
      value: 'Bình Định'
    },
    {
      lable: 'Bình Dương',
      value: 'Bình Dương'
    },
    {
      lable: 'Bình Phước',
      value: 'Bình Phước'
    },
    {
      lable: 'Bình Thuận',
      value: 'Bình Thuận'
    },
    {
      lable: 'Cà Mau',
      value: 'Cà Mau'
    },
    {
      lable: 'Cần Thơ',
      value: 'Cần Thơ'
    },
    {
      lable: 'Cao Bằng',
      value: 'Cao Bằng'
    },
    {
      lable: 'Đà Nẵng',
      value: 'Đà Nẵng'
    },
    {
      lable: 'Đắk Lắk',
      value: 'Đắk Lắk'
    },
    {
      lable: 'Đắk Nông',
      value: 'Đắk Nông'
    },
    {
      lable: 'Điện Biên',
      value: 'Điện Biên'
    },
    {
      lable: 'Đồng Nai',
      value: 'Đồng Nai'
    },
    {
      lable: 'Đồng Tháp',
      value: 'Đồng Tháp'
    },
    {
      lable: 'Gia Lai',
      value: 'Gia Lai'
    },
    {
      lable: 'Hà Giang',
      value: 'Hà Giang'
    },
    {
      lable: 'Hà Nam',
      value: 'Hà Nam'
    },
    {
      lable: 'Hà Nội',
      value: 'Hà Nội'
    },
    {
      lable: 'Hà Tĩnh',
      value: 'Hà Tĩnh'
    },
    {
      lable: 'Hải Dương',
      value: 'Hải Dương'
    },
    {
      lable: 'Hải Phòng',
      value: 'Hải Phòng'
    },
    {
      lable: 'Hậu Giang',
      value: 'Hậu Giang'
    },
    {
      lable: 'Hòa Bình',
      value: 'Hòa Bình'
    },
    {
      lable: 'Hưng Yên',
      value: 'Hưng Yên'
    },
    {
      lable: 'Khánh Hòa',
      value: 'Khánh Hòa'
    },
    {
      lable: 'Kiên Giang',
      value: 'Kiên Giang'
    },
    {
      lable: 'Yên Bái',
      value: 'Yên Bái'
    },
    {
      lable: 'Vĩnh Phúc',
      value: 'Vĩnh Phúc'
    },
    {
      lable: 'Vĩnh Long',
      value: 'Vĩnh Long'
    },
    {
      lable: 'Tuyên Quang',
      value: 'Tuyên Quang'
    },
    {
      lable: 'Trà Vinh',
      value: 'Trà Vinh'
    },
    {
      lable: 'TP Hồ Chí Minh',
      value: 'TP Hồ Chí Minh'
    },
    {
      lable: 'Tiền Giang',
      value: 'Tiền Giang'
    },
    {
      lable: 'Thừa Thiên Huế',
      value: 'Thừa Thiên Huế'
    },
    {
      lable: 'Thanh Hóa',
      value: 'Thanh Hóa'
    },
    {
      lable: 'Thái Nguyên',
      value: 'Thái Nguyên'
    },
    {
      lable: 'Thái Bình',
      value: 'Thái Bình'
    },
    {
      lable: 'Tây Ninh',
      value: 'Tây Ninh'
    },
    {
      lable: 'Sơn La',
      value: 'Sơn La'
    },
    {
      lable: 'Sóc Trăng',
      value: 'Sóc Trăng'
    },
    {
      lable: 'Quảng Trị',
      value: 'Quảng Trị'
    },
    {
      lable: 'Quảng Ninh',
      value: 'Quảng Ninh'
    },
    {
      lable: 'Quảng Ngãi',
      value: 'Quảng Ngãi'
    },
    {
      lable: 'Quảng Nam',
      value: 'Quảng Nam'
    },
    {
      lable: 'Quảng Bình',
      value: 'Quảng Bình'
    },
    {
      lable: 'Phú Yên',
      value: 'Phú Yên'
    },
    {
      lable: 'Phú Thọ',
      value: 'Phú Thọ'
    },
    {
      lable: 'Ninh Thuận',
      value: 'Ninh Thuận'
    },
    {
      lable: 'Ninh Bình',
      value: 'Ninh Bình'
    },
    {
      lable: 'Nghệ An',
      value: 'Nghệ An'
    },
    {
      lable: 'Nam Định',
      value: 'Nam Định'
    },
    {
      lable: 'Long An',
      value: 'Long An'
    },
    {
      lable: 'Lào Cai',
      value: 'Lào Cai'
    },
    {
      lable: 'Lạng Sơn',
      value: 'Lạng Sơn'
    },
    {
      lable: 'Lâm Đồng',
      value: 'Lâm Đồng'
    },
    {
      lable: 'Lai Châu',
      value: 'Lai Châu'
    },
    {
      lable: 'Kon Tum',
      value: 'Kon Tum'
    }
  ];

  infoType: IType[] = [];

  constructor(public fb: FormBuilder, private createService : TaoChuyenDiService,) { }
  diemDon: IDiemdon[] = [];
  diemTra: IDiemtra[] = [];
  ngOnInit(): void {
    this.getInfoForCreateTrip();
    this.validateForm = this.fb.group({
      code: [null, [Validators.required]],
      from: [null, [Validators.required]],
      to: [null, [Validators.required]],
      departureTime: [null, [Validators.required]],
      price: [null, [Validators.required]],
      typeId: [null, [Validators.required]],
    });
    this.formDon = this.fb.group({
      phoneNumber: [null, [Validators.required]],
      address: [null, [Validators.required]],
    })
    this.formTra = this.fb.group({
      phoneNumber: [null, [Validators.required]],
      address: [null, [Validators.required]],
    })
  }

  showModal(): void {
    this.isVisible = true;
  }
  showModal2(): void {
    this.isVisible2 = true;
  }

  getInfoForCreateTrip(){
    this.createService.getInfoForCreateTrip().subscribe((res: any)=>{
      this.infoType = res;
   })
  }

themDiemDon(){
  this.diemDon.push(this.formDon.value);
  this.diemDon = [...this.diemDon];
  this.isVisible = false;
}

themDiemTra(){
  this.diemTra.push(this.formTra.value);
  this.diemTra = [...this.diemTra];
  this.isVisible2 = false;
}

handleCancel(): void {
  this.isVisible = false;
}
handleCancel2(): void {
  this.isVisible2 = false;
}

create(){
  if(this.validateForm.valid){
  // this.validateForm.value;
  const params = {
    from: this.validateForm.get('from')?.value,
    to: this.validateForm.get('to')?.value,
    typeId: this.validateForm.get('typeId')?.value,
    price: this.validateForm.get('price')?.value,
    departureTime: this.validateForm.get('departureTime')?.value,
    pickups: this.diemDon,
    dropOffs: this.diemTra
  }
  console.log('para',params);
  this.createService.create(params).subscribe((res: any) => {
    console.log('res',res);
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
}
