import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {RedComponent}  from './colors/red/red.component';
import  {BlueComponent}  from './colors/blue/blue.component';
import  {GreenComponent}  from './colors/green/green.component';
import  {ColorListComponent}  from './colors/color-list/color-list.component';


const routes: Routes = [

  { path: 'color-list', component: ColorListComponent },
  { path: 'red', component: RedComponent },
  { path: 'blue', component: BlueComponent },
  { path: 'green', component: GreenComponent },
  { path: '', redirectTo: '/red', pathMatch: 'full' },
  { path: '**', component: RedComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
