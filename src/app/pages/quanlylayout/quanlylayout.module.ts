import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntDesignModule } from 'src/app/share/ant-design.module';
import { QuanlylayoutComponent } from './quanlylayout.component';
import { QuanLyLayoutRoutingModule } from './quanlylayout-routing.module';


@NgModule({
  declarations: [
    QuanlylayoutComponent
  ],
  imports: [
    CommonModule,
    AntDesignModule,
    QuanLyLayoutRoutingModule ,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuanLyLayOutModule { }
