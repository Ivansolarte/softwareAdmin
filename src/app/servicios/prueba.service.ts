import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/Rx';
import { Usuario } from '../modelos/usuario';



@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  baseUrl = environment.apiUrl + 'usuario/';

  constructor(private http: Http) {
  }

  obtnerUsuario(): Observable<Usuario[]> {
    return this.http
      .get(this.baseUrl, this.requestOptions())
      .map(response => <Usuario[]>response.json())
      .catch(this.handlerError);
  }

  private requestOptions() {
      const headers = new Headers({ 'Content-type': 'application/json' });
      return new RequestOptions({ headers: headers });
  }

  private handlerError(error: any) {
      const applicationError = error.headers.get('Application-Error');
      if (applicationError) {
        return Observable.throw(applicationError);
      }
      const serverError = error.json();
      let modelStateError = '';
      if (serverError) {
        for (const key in serverError) {
          if (serverError[key]) {
            modelStateError += serverError[key] + '\n';
          }
        }
      }
      return Observable.throw(modelStateError || 'Error del servidor');
  }
}
