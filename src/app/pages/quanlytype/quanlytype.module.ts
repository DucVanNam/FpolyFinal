import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntDesignModule } from 'src/app/share/ant-design.module';
import { QuanlytypeComponent } from './quanlytype.component';
import { QuanLyTypeRoutingModule } from './quanlytype-routing.module';


@NgModule({
  declarations: [
    QuanlytypeComponent
  ],
  imports: [
    CommonModule,
    AntDesignModule,
    QuanLyTypeRoutingModule ,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuanLyTypeModule { }
