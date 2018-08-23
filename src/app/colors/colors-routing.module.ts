import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorListComponent } from './color-list/color-list.component';
import { ColorDetailComponent } from './color-detail/color-detail.component';
import { ColorDetailHomeComponent } from './color-detail/color-detail-home.component';

const routes: Routes = [

  {
    path: 'color-list',
    component: ColorListComponent,
    children: [{
      path: ':id',
      component: ColorDetailComponent
    },
    {
      path: '',
      component: ColorDetailHomeComponent
    }

    ]
  }
 
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
  declarations: []
})
export class ColorsRoutingModule { }
