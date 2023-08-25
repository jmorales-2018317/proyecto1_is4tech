import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDirective } from './directives/whitespace/whitespace.directive';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    SharedModule,
    SharedDirective
  ]
})
export class SharedModule { }
