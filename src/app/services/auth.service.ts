import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators'
import { of } from "rxjs";
import { environment } from 'src/environments/environment';
import { AuthResp, Respuesta, Usuario } from '../interfaces/auth.interface'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private adminUrl: string = environment.adminiUrl;

  private _usuario!: Usuario;

  get usuario() {
    return {...this._usuario};
  }

  constructor( private http: HttpClient ) { }

  login ( usuario: string, clave: any ) {
    
    const url = `${this.adminUrl}/identificar-usuario`
    const body = { usuario, clave }
    console.log(clave);

    return this.http.post<AuthResp>(url, body )
      .pipe(
        tap( resp => {
          if(resp.ok === true){
            localStorage.setItem('token', resp.tk!);
            this._usuario = {
              nombre: resp.usuario?.nombre!,
              apellido: resp.usuario?.apellido!,
              id: resp.usuario?.id!
            }
          }
        }),
        map( resp => resp.ok ),
        catchError (err => of(err.error.error.message))
      );
  }

  recuperarPass ( correo: string ) {
    const url = `${this.adminUrl}/recuperar-clave`
    const body = { correo }

    return this.http.post<Respuesta>(url,body)
      .pipe(
        tap ( resp => {
          if( resp.ok === true ){
             // TODO: no se que hacer aqui haha :v
          }
        }),
        map( resp => resp.ok ),
        catchError (err => of(err.error.error.message))
      );
  }

}

