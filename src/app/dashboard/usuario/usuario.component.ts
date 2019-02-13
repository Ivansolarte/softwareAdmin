import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/app/servicios/prueba.service';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listaDeUsuarios: Usuario[] = [] as Usuario[];

  constructor(private pruebaServicio: PruebaService) {
    this.listarUsuario();
  }

  ngOnInit() {
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
