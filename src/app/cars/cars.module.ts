import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolvoComponent } from './volvo/volvo.component';
import { MercedesComponent } from './mercedes/mercedes.component';
import { NissanComponent } from './nissan/nissan.component';
import { BmwComponent } from './bmw/bmw.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VolvoComponent, MercedesComponent, NissanComponent, BmwComponent]
})
export class CarsModule { }
