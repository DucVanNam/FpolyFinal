import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuanlynhaxeComponent } from './quanlynhaxe.component';

const routes: Routes = [{ path: '', component: QuanlynhaxeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanLyNhaXeRoutingModule { }
