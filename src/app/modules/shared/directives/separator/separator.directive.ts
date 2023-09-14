import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSeparator]'
})
export class SeparatorDirective {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('blur', ['$event.target.value']) blur(value: string) {
    const cleanValue = value.replace(/,/g, '');
    const separatedValue = cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    this.renderer.setProperty(
      this.element.nativeElement,
      'value',
      separatedValue
    );
  }
}
