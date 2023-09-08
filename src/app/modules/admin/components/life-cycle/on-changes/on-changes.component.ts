import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html'
})
export class OnChangesComponent implements OnChanges {
  @Input()
  prevText = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.prevText = changes['prevText'].previousValue;
    setTimeout(() => {
      console.log(this.prevText);
    }, 30000); //Console log del previousValue con un Timeout de 30s
  }
}
