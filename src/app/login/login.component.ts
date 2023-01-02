import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  UserName = '';
  Password = '';
  Tenant = '';
  TenantId: any;
  data: any;
  dataUser: any;
  flagCheckTenant = false;

  constructor(
    private router: Router,
    private modal: NzModalService,
    private authService : AuthService
  ) { }

  submitTenant() {
  }

  submitLogin() {
    const params ={
      UserName : this.UserName,
      password: this.Password
    }
  this.authService.login(params).subscribe((response)=>{
  this.router.navigate(['/quanlyxe'], { replaceUrl: true });
 })
  }

  ngOnInit(): void {
  }
}
