import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YellowComponent } from './yellow/yellow.component';
import { GreenComponent } from './green/green.component';
import { RedComponent } from './red/red.component';
import { BlueComponent } from './blue/blue.component';
import { ColorListComponent } from './color-list/color-list.component';
import { ColorsService } from './colors.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    YellowComponent,
    GreenComponent,
    RedComponent,
    BlueComponent,
    ColorListComponent
  ],
  providers: [ColorsService],
})
export class ColorsModule { }
