import { Component } from '@angular/core';
import { RegistroProductoComponent } from './registro-producto/registro-producto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistroProductoComponent],
  template: `<app-registro-producto></app-registro-producto>`
})
export class App { }