import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = "http://localhost:8080/api/v1/employees";
  constructor(private httpClient: HttpClient) { }

  getListEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.url);
  }

  creatEmployee(employee): Observable<object>{
    return this.httpClient.post(this.url,employee)
  }

  getEmployeeById(id:number): Observable<Employee>{
    //dont forget to do <Employee> behind get methode ;(
    return this.httpClient.get<Employee>(this.url+'/'+id)
  }

  updateEmployee(id: number,employee: Employee): Observable<Employee>{
    return this.httpClient.put<Employee>(this.url+'/'+id, employee)
  }

  deleteEmployee(id){
    //url = /api/v1/employee-details/:id
    return this.httpClient.delete(this.url+'/'+id);
  }


}
