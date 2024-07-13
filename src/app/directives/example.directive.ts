import { Directive, ElementRef } from '@angular/core';

declare var $:any;


@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor="red";
    
  }

}
