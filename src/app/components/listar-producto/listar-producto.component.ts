import { Producto } from './../../interface/producto.interface';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit{

  lista: Producto[] = []

  constructor(private productoService: ProductoService){}

  ngOnInit(): void {
    this.productoService.productoAgregado
      .subscribe( (prodducto) => {
        this.lista.push(prodducto)
      } )
  }


}
