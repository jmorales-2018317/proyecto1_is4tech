import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCopyToClipboard]'
})
export class CopyToClipboardDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    const text = this.el.nativeElement.previousElementSibling.innerText;

    if (text) {
      const copiedText = document.createElement('textarea');
      copiedText.value = text;
      document.body.appendChild(copiedText);
      copiedText.select();
      document.execCommand('copy');
      document.body.removeChild(copiedText);
    }
  }
}
