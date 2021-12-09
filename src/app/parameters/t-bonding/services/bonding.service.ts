import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Bonding } from '../interfaces/bonding.interface';

@Injectable({
  providedIn: 'root'
})
export class BondingService {

  private academicUrl: string = environment.academicUrl;
  constructor( private http: HttpClient ) { }

  getBondingById(id: number):Observable<Bonding>{
    return this.http.get<Bonding>(`${this.academicUrl}/tipovinculaciones/${id}`);
  }

  getBonding():Observable<Bonding[]>{
    return this.http.get<Bonding[]>(`${this.academicUrl}/tipovinculaciones`,{ headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }
  createBonding( nombre: String, apellido: String, correo: String, celular: String): Observable<Bonding>{
    const url = `${this.academicUrl}/tipovinculaciones`
    const body = {nombre,apellido,correo,celular}
    return this.http.post<Bonding>(url,body,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})

    /* const body= {nombre,apellido,correo,celular}
    return this.http.post<Bonding>(`${this.academicUrl}/tipovinculaciones`,{ body },{ headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`}) }) */
  }
  deleteBonding(id:number):Observable<any>{
    console.log('desde servicio',id);
    const url = `${this.academicUrl}/tipovinculaciones/${id}`
    return this.http.delete<any>(url)
  }
  updateBonding(data: Bonding):Observable<Bonding>{
    const url = `${this.academicUrl}/tipovinculaciones/${data.id}`
    return this.http.put<Bonding>(url,data,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }


}
