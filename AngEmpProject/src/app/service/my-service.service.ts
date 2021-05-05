import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  employee!: Employee;

  constructor( private httpClient:HttpClient) { 

  }
  private baseUrl="http://localhost:8084/api/";

  public  getEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>("http://localhost:8084/api/getEmployees");
  }

  /* public  getEmployeeById(eid:number):Observable<Employee>{
    return this.httpClient.get<Employee>("http://localhost:8080/api/GetE/"+eid);
  } */

public deleteEmployee(eid:number):Observable<Employee>
{
  return this.httpClient.delete<Employee>(`${this.baseUrl}deleteEmployee/`+eid);
}

public createEmployee(employee:Employee):Observable<Employee>
{
  return this.httpClient.post<Employee>(`${this.baseUrl}/addEmployee`,employee);
}

public updateEmployee(employee:Employee):Observable<Employee>
{
  return this.httpClient.put<Employee>(`${this.baseUrl}updateE/`,employee);
}

}
