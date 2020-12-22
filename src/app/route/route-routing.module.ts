import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 组件
import {LayoutComponent} from './layout/layout.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: 'layout', component: LayoutComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
