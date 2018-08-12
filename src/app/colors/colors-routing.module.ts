import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {RedComponent}  from './red/red.component';
import  {BlueComponent}  from './blue/blue.component';
import  {GreenComponent}  from './green/green.component';
import  {ColorListComponent}  from './color-list/color-list.component';
import { ColorDetailComponent } from './color-detail/color-detail.component';

const routes: Routes = [

  { path: 'color-list', component: ColorListComponent },
  { path: 'color-detail/:id', component: ColorDetailComponent },
  { path: 'red', component: RedComponent },
  { path: 'blue', component: BlueComponent },
  { path: 'green', component: GreenComponent }

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(routes) ],
  declarations: []
})
export class ColorsRoutingModule { }
