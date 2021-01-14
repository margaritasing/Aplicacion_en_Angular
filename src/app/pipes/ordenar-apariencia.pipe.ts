import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarApariencia'
})
export class OrdenarAparienciaPipe implements PipeTransform {

  transform(value: any):any {
    return value.sort((a , b) =>{
    if(a.biography.alignment < b.biography.alignment){
      return -1;
    }

    if(a.biography.alignment > b.biography.alignment){
      return 1;
    }

    return 0;


    })

  }

}
