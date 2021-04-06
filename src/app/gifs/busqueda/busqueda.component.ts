import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;
  constructor(private gifsService:GifsService){ } //esto es inyectar los servicios para tener acceso a todas las propiedaddes del servicio 
  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value="";
  }
}
