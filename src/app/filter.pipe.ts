import { Pipe, PipeTransform } from '@angular/core';


// A pipe that filters a list for non-null strings.
@Pipe({
  name: 'stringFilter'
})
export class StringFilterPipe implements PipeTransform {
  transform(array: string[]): string[] {
    return array.filter(str => str.length > 0);
  }
}