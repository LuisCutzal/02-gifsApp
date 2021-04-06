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
    terminoBusqueda=terminoBusqueda.trim().toLowerCase();
    //el trim para borrar espacios adelante y atras y tolowercase es para hacerlo todo en minusculas
    if (!this._historial.includes(terminoBusqueda)) { //negamos y si no existe o se incluye entonces se agrega
      this._historial.unshift(terminoBusqueda);//para incertarlo al inicio del arreglo
    //this._historial.push(terminoBusqueda);//para incertarlo al final del arreglo
    this._historial=this._historial.splice(0,10); //para cortar el historial y solo sean 10 elementos que se ven
    }
    
    
    console.log(this._historial);
  }

}
