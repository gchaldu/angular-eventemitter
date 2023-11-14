import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from '../interface/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoAgregado = new EventEmitter<Producto>();

  constructor() { }

}
