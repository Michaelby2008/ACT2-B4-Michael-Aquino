import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  enviarProducto(producto: Producto) {
    console.log('Objeto válido enviado al backend:', producto);
    return true; 
  }
}