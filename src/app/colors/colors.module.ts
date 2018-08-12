import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YellowComponent } from './yellow/yellow.component';
import { GreenComponent } from './green/green.component';
import { RedComponent } from './red/red.component';
import { BlueComponent } from './blue/blue.component';
import { ColorListComponent } from './color-list/color-list.component';
import { ColorsService } from './colors.service';
import { ColorsRoutingModule } from './colors-routing.module';
import { ColorDetailComponent } from './color-detail/color-detail.component';


@NgModule({
  imports: [
    CommonModule,
    ColorsRoutingModule
  ],
  declarations: [
    YellowComponent,
    GreenComponent,
    RedComponent,
    BlueComponent,
    ColorListComponent,
    ColorDetailComponent
  ],
  providers: [ColorsService],
})
export class ColorsModule { }
