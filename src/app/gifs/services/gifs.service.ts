import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey:string="QaiPXKFFAy1DF7hBiYoEuubB9ZjdsdQs";
  private _historial:string[]=[];
  public resultados:any[]=[];
  get historial(){
    
    return [...this._historial];//llaves indicando q es un arreglo, los 3 puntos significa que el operador es spread, separa cada uno de los elementos y crea uno nuevo
  }

  constructor(private http: HttpClient){ }

  buscarGifs( terminoBusqueda:string){
    terminoBusqueda=terminoBusqueda.trim().toLowerCase();
    //el trim para borrar espacios adelante y atras y tolowercase es para hacerlo todo en minusculas
    if (!this._historial.includes(terminoBusqueda)) { //negamos y si no existe o se incluye entonces se agrega
      this._historial.unshift(terminoBusqueda);//para incertarlo al inicio del arreglo
    //this._historial.push(terminoBusqueda);//para incertarlo al final del arreglo
    this._historial=this._historial.splice(0,10); //para cortar el historial y solo sean 10 elementos que se ven
    }
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=QaiPXKFFAy1DF7hBiYoEuubB9ZjdsdQs&q=${terminoBusqueda}&limit=10`)
          .subscribe( (resp:any)=>{
            console.log(resp.data);
            this.resultados=resp.data;
          });
  }

}
