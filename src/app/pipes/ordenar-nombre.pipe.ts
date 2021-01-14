import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarNombre'
})
export class OrdenarNombrePipe implements PipeTransform {

  transform(value1: any):any {
    return value1.sort((x , y) =>{
    if(x.name < y.name){
      return -1;
    }

    if(x.name > y.name){
      return 1;
    }

    return 0;


    })

  }
}
