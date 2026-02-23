import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private http = inject(HttpClient);
  private baseUrl = 'https://back-end-python-rh.onrender.com/api/empleados'

  constructor() { }

  getEmployee():Observable<Empleado[]>{
      return this.http.get<Empleado[]>(this.baseUrl);
  }

  getEmployeeById(id:number): Observable<Empleado>{
   return this.http.get<Empleado>(`${this.baseUrl}/${id}`)
  }

  addEmployee(employee:Empleado):Observable<Empleado>{
    const {idEmpleado, ...body} = employee
    return this.http.post<Empleado>(this.baseUrl, body);
  }

  editEmployee(id:number, employee:Empleado): Observable<Empleado>{
    return this.http.put<Empleado>(`${this.baseUrl}/${id}`, employee);
  }

   deleteEmployee(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/${id}`);
  }
}
