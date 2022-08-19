import { Directive, ElementRef, HostListener, Output,EventEmitter } from '@angular/core';


@Directive({
  selector: '[track-scroll]',
})
export class TrackscrollerDirective {
  @Output() setScroll = new EventEmitter();


  constructor(private el: ElementRef) { 
    
    
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event:any) {
  console.log(window.pageYOffset);
}

}
