import { Component } from '@angular/core';
import { PruebaService } from './servicios/prueba.service';
import { Usuario } from './modelos/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  listaDeUsuarios: Usuario[] = [] as Usuario[];

  constructor(private pruebaServicio: PruebaService) {
    this.listarUsuario();
  }

  listarUsuario() {
    this.pruebaServicio.obtnerUsuario().subscribe(lista => {
      this.listaDeUsuarios = lista;
      console.log(this.listaDeUsuarios);
    },
    error => {
      console.log(error);

    });
  }
}
