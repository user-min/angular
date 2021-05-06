import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';


const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule {
}
