import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() color = '';
  constructor(private element: ElementRef) {}

  @HostListener('mouseover') mouseover() {
    this.element.nativeElement.style.backgroundColor = `rgb(${this.color})`;
  }
  @HostListener('mouseout') mouseout() {
    this.element.nativeElement.style.backgroundColor = '';
  }
}
