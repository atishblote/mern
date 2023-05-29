import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }


  ngAfterViewInit(): void {
    this.elementRef.nativeElement.style.color = "orange"
  }
  ChangeColor(newColor:any){
    this.elementRef.nativeElement.style.color = newColor
  }

  

}
