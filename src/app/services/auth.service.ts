import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators'
import { of } from "rxjs";
import { environment } from 'src/environments/environment';
import { AuthResp, Respuesta, Usuario, Usuarioxrol } from '../interfaces/auth.interface'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private adminUrl: string = environment.adminiUrl;
  private tokenUrl: string = environment.validarUrl;

  private _usuario!: Usuario;
  private _token!: AuthResp;
  private _idRol!: Usuarioxrol;

  get idRol () {
    return {...this._idRol}
  }

  get token() {
    return { ...this._token }
  }

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
            this._token = {
              tk: resp.tk
            },
            this._idRol={
              id_rol: resp.usuarioxrol?.id_rol
            },
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

  validarToken( id_rol: any ) {
    const url = `${this.tokenUrl}/validar-token`;
    const params = new HttpParams()
      .set('token',localStorage.getItem('token')||'')
      .set('rol',id_rol)
    return this.http.get( url,{params:params} )
  }


}

