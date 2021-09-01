import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  open = true;
  constructor(private elRef: ElementRef, private renderer : Renderer2) { }

  @HostListener('click') onclick(){

    
    console.log(this.elRef);
      if(this.elRef.nativeElement.className == 'btn-group'){
        this.renderer.addClass(this.elRef.nativeElement,'open');
        this.open = false;
      }else{
        this.renderer.removeClass(this.elRef.nativeElement,'open');
        this.open = true;
      }
  }

}
