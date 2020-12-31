import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 组件
import {LayoutComponent} from './layout/layout.component';
import {LoginComponent} from './login/login.component';
import {TreeComponent} from './tree/tree.component';
import {BannerComponent} from './banner/banner.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'layout'}, // 设置默认页面
  {path: 'login', component: LoginComponent},
  {path: 'layout', component: LayoutComponent},
  {path: 'tree', component: TreeComponent},
  {path: 'banner', component: BannerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
