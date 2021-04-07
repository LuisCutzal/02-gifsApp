import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey:string='QaiPXKFFAy1DF7hBiYoEuubB9ZjdsdQs';
  private servicioUrl:string= 'https://api.giphy.com/v1/gifs';
  private _historial:string[]=[];
  public resultados:Gif[]=[];
  get historial(){
    
    return [...this._historial];//llaves indicando q es un arreglo, los 3 puntos significa que el operador es spread, separa cada uno de los elementos y crea uno nuevo
  }

  constructor(private http: HttpClient){ 

    //forma 1
    /*if (localStorage.getItem("historial")) {
      this._historial=JSON.parse(localStorage.getItem("historial")!);      
    }*/

    //forma 2
    this._historial=JSON.parse(localStorage.getItem("historial")!) || [];
    this.resultados=JSON.parse(localStorage.getItem("resultados")!) || [];

  }

  buscarGifs( terminoBusqueda:string){
    terminoBusqueda=terminoBusqueda.trim().toLowerCase();
    //el trim para borrar espacios adelante y atras y tolowercase es para hacerlo todo en minusculas
    if (!this._historial.includes(terminoBusqueda)) { //negamos y si no existe o se incluye entonces se agrega
      this._historial.unshift(terminoBusqueda);//para incertarlo al inicio del arreglo
    //this._historial.push(terminoBusqueda);//para incertarlo al final del arreglo
    this._historial=this._historial.splice(0,10); //para cortar el historial y solo sean 10 elementos que se ven

    localStorage.setItem("historial",JSON.stringify(this._historial));
    }

const params = new HttpParams()
          .set('api_key', this.apiKey) //tener en cuenta las mayusculas y minusculas
          .set('limit', '10')
          .set('q',terminoBusqueda );


  
   this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params } )
          .subscribe( (resp)=>{
            console.log(resp.data);
            this.resultados=resp.data;
            localStorage.setItem("resultados",JSON.stringify(this.resultados));
          });
  }

}
