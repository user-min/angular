import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 组件库
import {NgZorroAntdModule} from 'ng-zorro-antd';
// 模块
import { RouteRoutingModule } from './route-routing.module';
// 组件
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { SiderMenuComponent } from './layout/sider-menu/sider-menu.component';
import { TreeComponent } from './tree/tree.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    SiderMenuComponent,
    TreeComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    RouteRoutingModule,
    NgZorroAntdModule
  ]
})
export class RouteModule { }
