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
   * @param {NumberFormatStyle} searchText
   * @returns {any[]}
   */
  transform(array: any[], searchText: number, label1?: any): any[] {
    if (!array) {
      return [];
    }
    if (!searchText) {
      return array;
    }
    searchText = Number(searchText)
    if (label1) {
      // for(let i =0;i<array.length;i++){
      //   console.log()
      //   }\
      console.log(label1)
      return array.filter(item => 
        (label1 ? ((item[label1]).includes(searchText)) : '') );
      // (label1? ((item[label1]).includes(searchText)):'') )
      }
    else {
      return array.filter(item => (item).includes(searchText))
    }
  }

}
