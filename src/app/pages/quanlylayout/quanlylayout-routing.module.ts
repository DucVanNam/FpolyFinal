import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuanlylayoutComponent } from './quanlylayout.component';
const routes: Routes = [{ path: '', component: QuanlylayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanLyLayoutRoutingModule { }
