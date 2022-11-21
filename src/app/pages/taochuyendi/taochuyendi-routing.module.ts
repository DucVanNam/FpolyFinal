import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaoChuyenDiComponent } from './taochuyendi.component';

const routes: Routes = 
[{ path: '', component: TaoChuyenDiComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaoChuyenDiRoutingModule { }
