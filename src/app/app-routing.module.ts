import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {RedComponent}  from './colors/red/red.component';

const routes: Routes = [

  { path: '', redirectTo: '/red', pathMatch: 'full' },
  { path: '**', component: RedComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
