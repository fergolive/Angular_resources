import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideSnapSmoothComponent } from './components/slide-snap-smooth/slide-snap-smooth.component';
import { BackgroundGridDinamicComponent } from './components/background-grid-dinamic/background-grid-dinamic.component';
import { BackgroundFilterComponent } from './components/background-filter/background-filter.component';
import { Slider5Component } from './components/slider5/slider5.component';
import { TrackscrollerDirective } from './directives/trackscroller.directive';
import { Slider6Component } from './components/slider6/slider6.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideSnapSmoothComponent,
    BackgroundGridDinamicComponent,
    BackgroundFilterComponent,
    Slider5Component,
    TrackscrollerDirective,
    Slider6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
