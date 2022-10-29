import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntDesignModule } from 'src/app/share/ant-design.module';
import { QuanLyChuyenDiRoutingModule } from './quanlychuyendi-routing.module';
import { QuanLyChuyenDiComponent } from './quanlychuyendi.component';


@NgModule({
  declarations: [
    QuanLyChuyenDiComponent
  ],
  imports: [
    CommonModule,
    AntDesignModule,
    QuanLyChuyenDiRoutingModule ,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuanLyChuyenDiModule { }
