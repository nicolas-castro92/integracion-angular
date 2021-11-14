import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResp } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private adminUrl: string = environment.adminiUrl;

  constructor( private http: HttpClient ) { }


  login ( usuario: string, clave: string ) {
    
    const url = `${this.adminUrl}/identificar-usuario`
    const body = { usuario, clave }

    return this.http.post<AuthResp>(url, body );
  }

}

