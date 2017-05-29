import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringFilter'
})
export class StringFilterPipe implements PipeTransform {
  transform(array: string[]): string[] {
    return array.filter(str => str.length > 0);
  }
}