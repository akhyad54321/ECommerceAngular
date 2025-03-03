import { DepartmentService } from './../../../_service/department.service';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';

@Component({
  selector: 'app-get-api',
  imports: [HttpClientModule, AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  sum:number = 0;
  userList: any [] = [];
  customerList: any [] = [];
  // http = inject(HttpClient);//one way to do injection: came after angular 16

  // Autowiring department service here

  constructor(private http: HttpClient, private deptService: DepartmentService){
    // this.getAdditionFunction();
  }

  // Type 1: All code written in .component class
  // getAllUser(){
  //   this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
  //     this.userList=result;  //use this if direct array is coming.
  //     console.log(this.userList);
  //   }, error=>{
  //     debugger;
  //     console.log(error.status); // Example: 404
  //     console.log(error.statusText); // Example: "Not Found"
  //     console.log(error.error); // The actual error body content
  //   })
  // }

    // Type 2: All code written in .service class:
    getAllUser(){
      this.deptService.getAllUserInService().subscribe((result:any)=>{
        this.userList=result;  //use this if direct array is coming.
            console.log(this.userList);
          }, error=>{
            debugger;
            console.log(error.status); // Example: 404
            console.log(error.statusText); // Example: "Not Found"
            console.log(error.error); // The actual error body content
          })
    }

 // Type 1: All code written in .component class
  // getAllCustomer(){
  //   this.http.get("https://projectapi.gerasim.in/api/BankLoan/GetAllUsers").subscribe((result:any)=>{
  //     this.customerList=result.data; //use this if direct Object is coming.
  //     console.log(this.customerList);
  //   }, error=>{
  //     console.log(error.status); // Example: 404
  //     console.log(error.statusText); // Example: "Not Found"
  //     console.log(error.error); // The actual error body content
  //   }
  // )}

  // Type 2: All code written in .service class:
  getAllCustomer(){
    this.deptService.getAllCustomerInService().subscribe((result:any)=>{
       this.customerList=result.data; //use this if direct Object is coming.
       console.log(this.customerList);
     }, error=>{  
       console.log(error.status); // Example: 404
       console.log(error.statusText); // Example: "Not Found"
       console.log(error.error); // The actual error body content
     }
   )}

   getAdditionFunction() {
    debugger;
    this.sum =  this.deptService.getAddition(2, 3);
    console.log("sum = " + this.sum);
  }
}
