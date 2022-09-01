import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundFilterComponent } from './components/background-filter/background-filter.component';
import { BackgroundGridDinamicComponent } from './components/background-grid-dinamic/background-grid-dinamic.component';
import { SlideSnapSmoothComponent } from './components/slide-snap-smooth/slide-snap-smooth.component';
import { SliderMenuSliderComponent } from './components/slider-menu-slider/slider-menu-slider.component';
import { Slider5Component } from './components/slider5/slider5.component';
import { Slider6Component } from './components/slider6/slider6.component';

const routes: Routes = [
  

{ path: '001', component: SlideSnapSmoothComponent},
{ path: '002', component: BackgroundGridDinamicComponent},
{ path: '003', component:BackgroundFilterComponent},
{ path: '004', component:SliderMenuSliderComponent},
{ path: '005', component:Slider5Component},
{ path: '006', component:Slider6Component}
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
