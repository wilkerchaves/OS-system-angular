import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { endWith, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Technician } from '../models/technician';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Technician[]> {
    const url = this.baseUrl + "/technicians";
    return this.http.get<Technician[]>(url)

  }

  findByid(id:any):Observable<Technician>{
    const url = this.baseUrl + "/technicians/" + id;
    return this.http.get<Technician>(url)
  }
  create(technician: Technician): Observable<Technician> {
    const url = this.baseUrl + "/technicians";
    return this.http.post<Technician>(url, technician);
  }

  update(technician: Technician): Observable<Technician> {
    const url = this.baseUrl + "/technicians/" + technician.id;
    return this.http.put<Technician>(url,technician)

  }
  delete(id:any):Observable<void>{
    const url = this.baseUrl + "/technicians/" + id;
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
