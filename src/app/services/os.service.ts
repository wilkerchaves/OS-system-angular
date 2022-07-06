import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Client } from '../models/client';
import { OS } from '../models/orderService';

@Injectable({
  providedIn: 'root'
})
export class OsService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<OS[]> {
    const url = this.baseUrl + "/orders";
    return this.http.get<OS[]>(url)

  }

  findByid(id:any):Observable<OS>{
    const url = this.baseUrl + "/orders/" + id;
    return this.http.get<OS>(url)
  }
  create(os: OS): Observable<OS> {
    const url = this.baseUrl + "/orders";
    return this.http.post<OS>(url, os);
  }

  update(os: OS): Observable<OS> {
    const url = this.baseUrl + "/orders";
    return this.http.put<OS>(url,os)

  }
  delete(id:any):Observable<void>{
    const url = this.baseUrl + "/orders/" + id;
    return this.http.delete<void>(url)
  }
  successMessage(msg:String): void {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: `${msg}`,
      showConfirmButton: true,
      timer: 4000
    })
  }

  erroMessage(msg: String): void {
    Swal.fire({
      icon: 'error',
      title: 'Erro ao salvar',
      text: `${msg}`,
      width: '400px'

    })
  }
}
