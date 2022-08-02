import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-snap-smooth',
  templateUrl: './slide-snap-smooth.component.html',
  styleUrls: ['./slide-snap-smooth.component.scss']
})
export class SlideSnapSmoothComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToSection($elem:any){
    $elem.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
