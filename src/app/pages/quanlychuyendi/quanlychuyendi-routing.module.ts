import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuanLyChuyenDiComponent } from './quanlychuyendi.component';
import { TaoChuyenDiComponent } from '../taochuyendi/taochuyendi.component';

const routes: Routes = [{ path: '', component: QuanLyChuyenDiComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanLyChuyenDiRoutingModule { }
