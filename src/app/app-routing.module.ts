import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundFilterComponent } from './components/background-filter/background-filter.component';
import { BackgroundGridDinamicComponent } from './components/background-grid-dinamic/background-grid-dinamic.component';
import { SlideSnapSmoothComponent } from './components/slide-snap-smooth/slide-snap-smooth.component';

const routes: Routes = [
  

{ path: '001', component: SlideSnapSmoothComponent},
{ path: '002', component: BackgroundGridDinamicComponent},
{ path: '003', component:BackgroundFilterComponent}
     

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
