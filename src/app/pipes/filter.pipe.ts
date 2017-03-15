import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], value: string, searchMethod: any): any[] {
     if (!items) {
       return [];
     }

     if (!value) {
       return items;
     }

     let filteredSecrets = items.filter(it => it.location.match(new RegExp(value, 'i')));

     if(searchMethod == undefined){
       return filteredSecrets
     } else {
       return filteredSecrets.filter(it => it.what.match(new RegExp(searchMethod, 'i')));
     }
   }
}
