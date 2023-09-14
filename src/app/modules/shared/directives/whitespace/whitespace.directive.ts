import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appWhiteSpace]'
})
export class WhiteSpaceDirective {
  constructor() {
    this.trimText;
  }
  @HostListener('keyup', ['$event.target.text'])
  trimText(text: string) {
    return text.trim();
  }
}
