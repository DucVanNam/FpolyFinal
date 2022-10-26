import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntDesignModule } from 'src/app/share/ant-design.module';
import { QuanLyXeComponent } from './quanlyxe.component';
import { QuanLyXeRoutingModule } from './quanlyxe-routing.module';


@NgModule({
  declarations: [
    QuanLyXeComponent
  ],
  imports: [
    CommonModule,
    AntDesignModule,
    QuanLyXeRoutingModule ,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuanLyXeModule { }
