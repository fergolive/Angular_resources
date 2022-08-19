import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-menu-slider',
  templateUrl: './slider-menu-slider.component.html',
  styleUrls: ['./slider-menu-slider.component.scss']
})
export class SliderMenuSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToSection($elem:any){
    $elem.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
  }

}
