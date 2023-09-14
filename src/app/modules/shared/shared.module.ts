import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteSpaceDirective } from './directives/whitespace/whitespace.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubstringPipe } from './pipes/substring/substring.pipe';
import { MatIconModule } from '@angular/material/icon';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { SeparatorDirective } from './directives/separator/separator.directive';
import { CopyToClipboardDirective } from './directives/copyToClipboard/copy-to-clipboard.directive';

@NgModule({
  declarations: [
    WhiteSpaceDirective,
    SubstringPipe,
    HighlightDirective,
    SeparatorDirective,
    CopyToClipboardDirective
  ],
  imports: [CommonModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    WhiteSpaceDirective,
    HighlightDirective,
    SeparatorDirective,
    CopyToClipboardDirective,
    SubstringPipe,
    MatIconModule
  ]
})
export class SharedModule {}
