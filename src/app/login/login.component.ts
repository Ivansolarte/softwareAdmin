import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgControl } from '../../../node_modules/@angular/forms';

// import { PruebaService } from '../servicios/prueba.service';
// import { Usuario } from '../modelos/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

 constructor(private fb: FormBuilder) { }

ngOnInit() {
  this.crearFormularioLogin();
}

crearFormularioLogin() {
  this.formLogin = this.fb.group({
    usuario: ['', Validators.required],
    contrasena: ['', Validators.required],
  });
}

login() {
  console.log(this.formLogin.value);

 }



}
