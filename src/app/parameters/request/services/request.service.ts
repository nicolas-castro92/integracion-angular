import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request, solicitudxr } from '../interfaces/request.interface';
import { UploadedFile } from '../interfaces/upload.file.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {


  //?filter={"include":[{"relation":"idtiposolicitud"},{"relation":"idmodalidad"},{"relation":"idestado"},{"relation":"idareainvestigacion"}]}

  private academicUrl: string = environment.academicUrl;
  
  constructor( private http: HttpClient ) { }

  createRequest(data: any):Observable<any>{
    const url = `${this.academicUrl}/solicitudes`;
    return this.http.post<Request>(url,data,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})})
  }

  createRequestProponent(data:any):Observable<any>{
    console.log('desde servicio',data);
    const url = `${this.academicUrl}/proponentexsolicitudes`;
    return this.http.post<any>(url,data,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  getRequest():Observable<Request[]>{
    const url = `${this.academicUrl}/solicitudes?filter={"include":[{"relation":"idtiposolicitud"},{"relation":"idmodalidad"},{"relation":"idestado"},{"relation":"idareainvestigacion"}]}`
    return this.http.get<Request[]>(url);
  }

  getRequestById(id:number):Observable<Request>{
    const url = `${this.academicUrl}/solicitudes/${id}`
    return this.http.get<Request>(url);
  }

  updateRequest(Request: Request):Observable<Request>{
    const url = `${this.academicUrl}/solicitudes/${Request.id}`
    return this.http.put<Request>(url, Request,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  deleteRequest(id:number):Observable<any>{
    const url = `${this.academicUrl}/solicitudes/${id}`
    return this.http.delete<any>(url,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }

  UploadDocument(form: FormData): Observable<UploadedFile>{
    const ulr = `${this.academicUrl}/cargarDocumentoPersona`
    return this.http.post<UploadedFile>(ulr,form,{headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})});
  }
  requestDos():Observable<solicitudxr[]>{
    const url = `${this.academicUrl}/juradoxsolicitudes`
    return this.http.get<solicitudxr[]>(url);
  }

}
