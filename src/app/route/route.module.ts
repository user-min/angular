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


@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    SiderMenuComponent,
  ],
  imports: [
    CommonModule,
    RouteRoutingModule,
    NgZorroAntdModule
  ]
})
export class RouteModule { }
