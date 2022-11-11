import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntDesignModule } from 'src/app/share/ant-design.module';
import { QuanLyNhaXeRoutingModule } from './quanlynhaxe-routing.module';
import { QuanlynhaxeComponent } from './quanlynhaxe.component';


@NgModule({
  declarations: [
    QuanlynhaxeComponent
  ],
  imports: [
    CommonModule,
    AntDesignModule,
    QuanLyNhaXeRoutingModule ,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuanLyNhaXeModule { }
