import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  list : Employee[];
  readonly rootURL = "https://localhost:44355/api"

  constructor(private http: HttpClient) { }

  postEmployee(formData: Employee){
    return this.http.post<any>(this.rootURL+ '/Employee', formData);
  }

  putEmployee(formData: Employee){
    return this.http.put<any>(this.rootURL+ '/Employee/' + formData.EmployeeID, formData);
  }

  refreshList(){
    this.http.get<any>(this.rootURL+ '/Employee')
    .toPromise().then(res => this.list=res as Employee[]);
  }

  deleteEmployee(id:number){
    return this.http.delete<any>(this.rootURL+ '/Employee/'+id);
  }
}
