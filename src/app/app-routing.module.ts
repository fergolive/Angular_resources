import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideSnapSmoothComponent } from './components/slide-snap-smooth/slide-snap-smooth.component';

const routes: Routes = [
  

{ path: '001', component: SlideSnapSmoothComponent},
     

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
