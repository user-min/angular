import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 组件
import {LayoutComponent} from './layout/layout.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'layout'}, // 设置默认页面
  {path: 'layout', component: LayoutComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
