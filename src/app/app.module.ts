import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideSnapSmoothComponent } from './components/slide-snap-smooth/slide-snap-smooth.component';
import { BackgroundGridDinamicComponent } from './components/background-grid-dinamic/background-grid-dinamic.component';
import { BackgroundFilterComponent } from './components/background-filter/background-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideSnapSmoothComponent,
    BackgroundGridDinamicComponent,
    BackgroundFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
