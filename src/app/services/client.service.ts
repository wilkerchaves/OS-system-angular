import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Client[]> {
    const url = this.baseUrl + "/clients";
    return this.http.get<Client[]>(url)

  }

  findByid(id:any):Observable<Client>{
    const url = this.baseUrl + "/clients/" + id;
    return this.http.get<Client>(url)
  }
  create(client: Client): Observable<Client> {
    const url = this.baseUrl + "/clients";
    return this.http.post<Client>(url, client);
  }

  update(technician: Client): Observable<Client> {
    const url = this.baseUrl + "/clients/" + technician.id;
    return this.http.put<Client>(url,technician)

  }
  delete(id:any):Observable<void>{
    const url = this.baseUrl + "/clients/" + id;
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
