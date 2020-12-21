import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test01RoutingModule } from './test01-routing.module';
import { C1Component } from './c1/c1.component';


@NgModule({
  // 声明组件
  declarations: [
    C1Component
  ],
  // 引入模块
  imports: [
    CommonModule,
    Test01RoutingModule
  ]
})
export class Test01Module { }
