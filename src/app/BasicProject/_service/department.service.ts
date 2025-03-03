import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http : HttpClient){
  
  }

  getAllUserInService(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  getAllCustomerInService(){
    return  this.http.get("https://projectapi.gerasim.in/api/BankLoan/GetAllUsers");
  }

  getAddition(num1: number, num2: number){
    return num1 + num2;
  }
}
