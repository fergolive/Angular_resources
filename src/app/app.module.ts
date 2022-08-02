import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideSnapSmoothComponent } from './components/slide-snap-smooth/slide-snap-smooth.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideSnapSmoothComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
