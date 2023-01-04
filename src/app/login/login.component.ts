import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ApiService } from './api.service';
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
    private loginService: ApiService,
  ) { }

  submitTenant() {
  }

  submitLogin() {
    if (this.UserName == '' || this.Password == '') {
      this.modal.error({
        nzTitle: 'Lỗi',
        nzContent: 'Chưa nhập đầy đủ các thông tin!'
      });
    }
    const params ={
      UserName : this.UserName,
      password: this.Password
    }
    this.loginService.login(params).subscribe((data) =>{{
      if(data == null){
        this.modal.error({
          nzTitle: 'Lỗi',
          nzContent: 'Tên tài khoản hoặc mật khẩu không chính xác!'
        });
      }
      else{
        localStorage.setItem('idCoach', JSON.stringify(data.id));
        this.router.navigate(['/quanlychuyendi'], { replaceUrl: true });
      }
    }});
  }

  ngOnInit(): void {
    localStorage.clear();
  }
}
