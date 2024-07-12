import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor="red";
    
  }

}
