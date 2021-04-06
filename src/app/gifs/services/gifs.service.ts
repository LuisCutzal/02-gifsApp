import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial:string[]=[];
  get historial(){
    return [...this._historial];//llaves indicando q es un arreglo, los 3 puntos significa que el operador es spread, separa cada uno de los elementos y crea uno nuevo
  }

  buscarGifs( terminoBusqueda:string){
    this._historial.unshift(terminoBusqueda);//para incertarlo al inicio del arreglo
    //this._historial.push(terminoBusqueda);//para incertarlo al final del arreglo
    console.log(this._historial);
  }

}
