import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {PageNotFoundComponent}  from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: '', redirectTo: '/pnf', pathMatch: 'full' },
  { path: 'pnf', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
