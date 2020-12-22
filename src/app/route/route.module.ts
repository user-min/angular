import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import { LayoutComponent } from './layout/layout.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouteRoutingModule,
    NgZorroAntdModule
  ]
})
export class RouteModule { }
