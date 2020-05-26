import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any, sortType: string = '', propName: string): any {
    if (value.length === 0 || sortType === '') {
      return value;
    }
    const resultArray = value;
    switch (sortType) {
      case 'asc':
        resultArray.sort((a, b) => a[propName] - b[propName]);
        break;
      case 'desc':
        resultArray.sort((a, b) => b[propName] - a[propName]);
        break;
      default:
        resultArray.sort((a, b) => b[propName] - a[propName]);
    }
    return resultArray;
  }
}
