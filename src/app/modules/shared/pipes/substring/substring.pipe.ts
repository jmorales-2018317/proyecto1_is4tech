import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {
  transform(text: string, char = 10): string {
    return text.substring(0, char);
  }
}
