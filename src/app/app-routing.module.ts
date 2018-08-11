import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {RedComponent}  from './red/red.component';
import  {BlueComponent}  from './blue/blue.component';
import  {GreenComponent}  from './green/green.component';
import  {ColorListComponent}  from './color-list/color-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/red', pathMatch: 'full' },
  { path: 'color-list', component: ColorListComponent },
  { path: 'red', component: RedComponent },
  { path: 'blue', component: BlueComponent },
  { path: 'green', component: GreenComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
