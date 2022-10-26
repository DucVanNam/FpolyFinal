import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LayoutQuanLyComponent } from './layoutquanly/layoutquanly.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/datvexe' },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: LayoutComponent,
    children: [
      //{ path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'datvexe', loadChildren: () => import('./pages/datvexe/datvexe.module').then(m => m.DatvexeModule) }
    ]
  },
  {
    path: '', component: LayoutQuanLyComponent,
    children: [
      { path: 'quanlyxe', loadChildren: () => import('./pages/quanlyxe/quanlyxe.module').then(m => m.QuanLyXeModule) }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
