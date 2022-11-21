import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntDesignModule } from 'src/app/share/ant-design.module';
import { TaoChuyenDiRoutingModule } from './taochuyendi-routing.module';
import { TaoChuyenDiComponent } from './taochuyendi.component';


@NgModule({
  declarations: [
    TaoChuyenDiComponent
  ],
  imports: [
    CommonModule,
    AntDesignModule,
    TaoChuyenDiRoutingModule ,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TaoChuyenDiModule { }
