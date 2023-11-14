import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Producto } from 'src/app/interface/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent {


  constructor(private formBuilder: FormBuilder, private productoService: ProductoService){}

  formulario: FormGroup = this.formBuilder.group(
    {
      producto: ''
    }
  )

  addProducto(){
    const prod: Producto = {
      nombre: this.formulario.controls['producto'].value
    }


    this.productoService.productoAgregado.emit(prod)
    console.log(prod)
  }
}
