import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';
import { Jurie, JurieUser } from '../interfaces/jurie.interface';
import { catchError } from 'rxjs/operators';
import { Respuesta, ValidacionToken } from 'src/app/interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class JurieService {

  private _usuario!: JurieUser;

  get usuario() {
    return {...this._usuario};
  }

  private academicUrl: string = environment.academicUrl;
  
  constructor( private http: HttpClient ) { }

  createJurie(nombre:string,celular:string,correo:string,entidad:string):Observable<Jurie>{
    const url = `${this.academicUrl}/jurados`;
    const body = {nombre,celular,correo,entidad};
    return this.http.post<Jurie>(url,body,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }

  getJurie():Observable<Jurie[]>{
    const url = `${this.academicUrl}/jurados`
    return this.http.get<Jurie[]>(url);
  }

  getJurieById(id:number):Observable<Jurie>{
    const url = `${this.academicUrl}/jurados/${id}`
    return this.http.get<Jurie>(url);
  }

  updateJurie(Jurie: Jurie):Observable<Jurie>{
    const url = `${this.academicUrl}/jurados/${Jurie.id}`
    return this.http.put<Jurie>(url, Jurie,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  deleteJurie(id:number):Observable<any>{
    const url = `${this.academicUrl}/jurados/${id}`
    return this.http.delete<any>(url,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  recuperarPass ( correo: string ) {
    const url = `${this.academicUrl}/recuperar-clave`
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

  validarToken(): Observable<boolean>{
    const url = `${this.academicUrl}/validacion`
    const token = localStorage.getItem('token'||"")
    const body = {token}
    //console.log('toke',token);
    //console.log('body',body);
    return this.http.post<ValidacionToken>(url,body)
      .pipe(

        map( resp => {
          //console.log(resp.token?.token);
          localStorage.setItem('token',resp.token?.token!)
          this._usuario = {
            ok: resp.ok!
          }
          return resp.ok!
        }),
        catchError( err => of(false) )
      )
  }

  login ( usuario: string, clave: any ) {
    
    const url = `${this.academicUrl}/identificar-usuario`
    const body = { usuario, clave }
    //console.log(clave);

    return this.http.post<JurieUser>(url, body )
      .pipe(
        tap( resp => {
          if(resp.ok === true){
            localStorage.setItem('token', resp.tk!);
            //sessionStorage.setItem('id_rol',(resp.usuarioxrol?.id_rol!).toString());
            /* this._token = {
              tk: resp.tk
            },
            this._idRol={
              id_rol: resp.usuarioxrol?.id_rol
            }, */
            this._usuario = {
              ok: resp.ok!,
            }
          }
        }),
        map( resp => resp.ok ),
        catchError (err => of(err.error.error.message))
      );
      
  }

  asignJurie(data:any):Observable<any>{
    const url = `${this.academicUrl}/juradoxsolicitudes`
    return this.http.post<any>(url,data);
  }


}
