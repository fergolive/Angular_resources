import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-filter',
  templateUrl: './background-filter.component.html',
  styleUrls: ['./background-filter.component.scss']
})
export class BackgroundFilterComponent implements OnInit {
  image='./assets/images/background.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
