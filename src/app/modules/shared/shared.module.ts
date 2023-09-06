import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDirective } from './directives/whitespace/whitespace.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SharedDirective],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule]
})
export class SharedModule {}
