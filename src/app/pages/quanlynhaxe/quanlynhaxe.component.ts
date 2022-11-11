import { Component, OnInit } from '@angular/core';
interface Person {
  key: string;
  FirstName: string;
  LastName : string;
  DOB: string;
  PhoneNumber: string;
  Email: string;
  Nationality: string;
  IdentityNo : string;
  LisenceNo : string;
  Address : string;

}
@Component({
  selector: 'app-quanlynhaxe',
  templateUrl: './quanlynhaxe.component.html',
  styleUrls: ['./quanlynhaxe.component.scss']
})
export class QuanlynhaxeComponent  {

  date = null;
  constructor() {}
  listOfData: Person[] = [
    {
      key: '1',
      FirstName: 'Ô mai',
      LastName: 'hihi',
      DOB: '11/11/2022',
      PhoneNumber: '011111111',
      Email: 'hihi@gmail.com',
      Nationality: 'Việt Nam',
      IdentityNo : '123485',
      LisenceNo : 'N01',
      Address : 'Hà Nội',
    },
    {
      key: '1',
      FirstName: 'Ô mai',
      LastName: 'hihi',
      DOB: '11/11/2022',
      PhoneNumber: '011111111',
      Email: 'hihi@gmail.com',
      Nationality: 'Việt Nam',
      IdentityNo : '123485',
      LisenceNo : 'N01',
      Address : 'Hà Nội',
    },
    {
      key: '1',
      FirstName: 'Ô mai',
      LastName: 'hihi',
      DOB: '11/11/2022',
      PhoneNumber: '011111111',
      Email: 'hihi@gmail.com',
      Nationality: 'Việt Nam',
      IdentityNo : '123485',
      LisenceNo : 'N01',
      Address : 'Hà Nội',
    },
    {
      key: '1',
      FirstName: 'Ô mai',
      LastName: 'hihi',
      DOB: '11/11/2022',
      PhoneNumber: '011111111',
      Email: 'hihi@gmail.com',
      Nationality: 'Việt Nam',
      IdentityNo : '123485',
      LisenceNo : 'N01',
      Address : 'Hà Nội',
    },
    {
      key: '1',
      FirstName: 'Ô mai',
      LastName: 'hihi',
      DOB: '11/11/2022',
      PhoneNumber: '011111111',
      Email: 'hihi@gmail.com',
      Nationality: 'Việt Nam',
      IdentityNo : '123485',
      LisenceNo : 'N01',
      Address : 'Hà Nội',
    },
    {
      key: '1',
      FirstName: 'Ô mai',
      LastName: 'hihi',
      DOB: '11/11/2022',
      PhoneNumber: '011111111',
      Email: 'hihi@gmail.com',
      Nationality: 'Việt Nam',
      IdentityNo : '123485',
      LisenceNo : 'N01',
      Address : 'Hà Nội',
    },
    {
      key: '1',
      FirstName: 'Ô mai',
      LastName: 'hihi',
      DOB: '11/11/2022',
      PhoneNumber: '011111111',
      Email: 'hihi@gmail.com',
      Nationality: 'Việt Nam',
      IdentityNo : '123485',
      LisenceNo : 'N01',
      Address : 'Hà Nội',
    },
    {
      key: '1',
      FirstName: 'Ô mai',
      LastName: 'hihi',
      DOB: '11/11/2022',
      PhoneNumber: '011111111',
      Email: 'hihi@gmail.com',
      Nationality: 'Việt Nam',
      IdentityNo : '123485',
      LisenceNo : 'N01',
      Address : 'Hà Nội',
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
