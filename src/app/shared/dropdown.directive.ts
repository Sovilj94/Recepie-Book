import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  
  constructor(private elRef: ElementRef, private renderer : Renderer2) { }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') onclick(){
    this.isOpen = !this.isOpen;
  }

}
