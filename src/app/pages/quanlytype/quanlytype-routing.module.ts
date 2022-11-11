import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuanlytypeComponent } from './quanlytype.component';

const routes: Routes = [{ path: '', component: QuanlytypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanLyTypeRoutingModule { }
