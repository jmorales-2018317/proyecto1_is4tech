import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteSpaceDirective } from './directives/whitespace/whitespace.directive';
import { SubstringPipe } from './pipes/substring/substring.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { SeparatorDirective } from './directives/separator/separator.directive';
import { CopyToClipboardDirective } from './directives/copyToClipboard/copy-to-clipboard.directive';
import { UserComponent } from './components/user/user.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    WhiteSpaceDirective,
    SubstringPipe,
    HighlightDirective,
    SeparatorDirective,
    CopyToClipboardDirective,
    UserComponent
  ],
  imports: [CommonModule, MatIconModule],
  exports: [
    WhiteSpaceDirective,
    HighlightDirective,
    SeparatorDirective,
    CopyToClipboardDirective,
    SubstringPipe,
    UserComponent
  ]
})
export class SharedModule {}
