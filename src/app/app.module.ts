import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PruebaService } from './servicios/prueba.service';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioComponent } from './dashboard/usuario/usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    ReactiveFormsModule,
    HttpModule
  ],
  providers: [PruebaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
