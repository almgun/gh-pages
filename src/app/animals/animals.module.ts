import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { HorseComponent } from './horse/horse.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CatComponent, DogComponent, HorseComponent]
})
export class AnimalsModule { }
