import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUpper'
})
export class FirstLetterUpperPipe implements PipeTransform {
  transform(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}