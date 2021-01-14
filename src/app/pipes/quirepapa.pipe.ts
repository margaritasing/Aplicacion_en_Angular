import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quirepapa'
})
export class QuirepapaPipe implements PipeTransform {

  transform(value1: any): any {
    return value1.filter((value1, i, arr) => arr.findIndex ( data => data.biography.alignment === value1.biography.alignment) === i);
  }
}
