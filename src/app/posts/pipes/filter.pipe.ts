import { Pipe, PipeTransform } from '@angular/core';
import { NumberFormatStyle } from '@angular/common';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  /**
   * Transform
   *
   * @param {any[]} items
   * @param {Number} searchText
   * @returns {any[]}
   */
  transform(array: any[], searchText: number, label1?: any): any[] {
    let newArr =[];
    if (!array) {
      return [];
    }
    if (!searchText) {
      return array;
    }
    searchText = Number(searchText)
    if (label1) {
      for(let i =0;i<array.length;i++){
        if(array[i].userId==searchText){
           newArr.push(array[i])
          }
        }
        return newArr;
      }
    else {
      return array.filter(item => (item).includes(searchText))
    }
  }

}
