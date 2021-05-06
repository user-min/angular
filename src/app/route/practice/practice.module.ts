import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FirstComponent} from './first/first.component';

import { PracticeRoutingModule } from './practice-routing.module';
import {SecondComponent} from './second/second.component';


@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule
  ]
})
export class PracticeModule { }
