import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuanLyXeComponent } from './quanlyxe.component';

const routes: Routes = [{ path: '', component: QuanLyXeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanLyXeRoutingModule { }
