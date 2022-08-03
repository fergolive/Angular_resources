import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-grid-dinamic',
  templateUrl: './background-grid-dinamic.component.html',
  styleUrls: ['./background-grid-dinamic.component.scss']
})
export class BackgroundGridDinamicComponent implements OnInit {
  image='./assets/images/background.jpg'


  constructor() { }

  ngOnInit(): void {
  }

}
