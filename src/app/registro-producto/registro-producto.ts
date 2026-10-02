import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../services/producto';

@Component({
  selector: 'app-registro-producto',
  standalone: true, // Esto soluciona el error NG2012
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro-producto.html' // Actualizamos el nombre esperado del HTML
})
export class RegistroProductoComponent {
  private fb = inject(FormBuilder);
  private productoService = inject(ProductoService);

  productoForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    descripcion: ['', [Validators.required]],
    precio: ['', [Validators.required, Validators.min(0.01)]],
    categoria: ['', [Validators.required]],
    stock: ['', [Validators.required, Validators.min(1)]]
  });

  categorias: string[] = ['Electrónica', 'Hogar', 'Ropa', 'Alimentos'];

  enviarDatos() {
    if (this.productoForm.valid) {
      this.productoService.enviarProducto(this.productoForm.value);
      alert('Producto enviado correctamente. Revisa la consola.');
      this.productoForm.reset();
    } else {
      this.productoForm.markAllAsTouched();
    }
  }
}