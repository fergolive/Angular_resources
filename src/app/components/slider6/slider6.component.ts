import { Component, OnInit, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-slider6',
  templateUrl: './slider6.component.html',
  styleUrls: ['./slider6.component.scss']
})
export class Slider6Component implements OnInit {
  pos = { top: 0, left: 0, x: 0, y: 0 };
  ele:any

  mouseX: number=0;
  mouseY: number=0;
  sub: any;
  box: any;
  mousedown$:any;
  mouseup$:any;

  constructor(public renderer: Renderer2) { }

  /* 
  https://stackblitz.com/edit/angular-mousemove-after-mouse-down-betbof?file=app%2Fapp.component.ts
  */

  ngOnInit(): void {
    this.box = this.renderer.selectRootElement('#btn-1');
    this.mousedown$ = fromEvent(this.box, 'mousedown');
    this.mousedown$.subscribe(() => {
      console.log('clicked');
    });
    this.register();


    let listElems=document.getElementsByClassName('track-scroll')
    console.log(listElems);
    
    for (let index = 0; index < listElems.length; index++) {

        listElems[index].addEventListener('scroll', (e:any) => {

            console.log(e.target.scrollLeft, e.target.scrollTop);

            let sliderBottom=document.getElementById('sliderBottom') as HTMLElement
            let slide=document.getElementById('aSlide') as HTMLElement

            var position = slide.getBoundingClientRect();

            console.log('scroll width:'+sliderBottom.scrollWidth)
            console.log('scroll  client:'+sliderBottom.clientWidth)
            console.log(window.innerWidth);
            console.log(position.width);
            
            if(e.target.scrollLeft+(window.innerWidth)>position.width){
              console.log('entro el rojo')
            }
            
            /* if(position.left >= 0 && position.right <= window.innerWidth) {
              console.log('Element is fully visible in screen');
            } */

           
          
         
           
      });
      
    }



  }

  register() {
    try {
      this.sub.unsubscribe();
    } catch (err) {
      
    } finally {

    }

    let mousemove$ = fromEvent(this.box, 'mousemove');
  
    this.sub = mousemove$.subscribe((e: any) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      console.log(e.x, e.y);
    })
  }

  goToSection($elem:any){
    $elem.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
  }

  /* mouse_up(e:any){
    
    let ele=document.getElementById(`${e.target.id}`) as HTMLElement;
 

    this.pos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };

    console.log(this.pos);
    
    
   
   
    
  } */




 

}
