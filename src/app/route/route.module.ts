import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 组件库
import {NgZorroAntdModule} from 'ng-zorro-antd';
// 模块
import { RouteRoutingModule } from './route-routing.module';
// 组件
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouteRoutingModule,
    NgZorroAntdModule
  ]
})
export class RouteModule { }
