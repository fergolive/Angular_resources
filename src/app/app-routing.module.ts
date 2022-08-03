import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundGridDinamicComponent } from './components/background-grid-dinamic/background-grid-dinamic.component';
import { SlideSnapSmoothComponent } from './components/slide-snap-smooth/slide-snap-smooth.component';

const routes: Routes = [
  

{ path: '001', component: SlideSnapSmoothComponent},
{ path: '002', component: BackgroundGridDinamicComponent},
     

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
