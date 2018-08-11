import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RedComponent } from './red/red.component';
import { BlueComponent } from './blue/blue.component';
import { GreenComponent } from './green/green.component';
import { ColorListComponent } from './color-list/color-list.component';
import { ColorsService } from './colors.service';

@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    BlueComponent,
    GreenComponent,
    ColorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ColorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
