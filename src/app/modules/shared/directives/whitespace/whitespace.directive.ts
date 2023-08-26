import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appShared]'
})
export class SharedDirective {
  constructor() {
    this.trimText;
  }
  @HostListener('keyup', ['$event.target.text'])
  trimText(text: string) {
    return text.trim();
  }
}
