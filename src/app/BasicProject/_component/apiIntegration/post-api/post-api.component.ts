import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from "../../../reusableComponent/alert/alert.component";
import { IUser } from '../../../_model/interface/IUser';
import { Document } from '../../../_model/class/Document';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, AlertComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

  userList: IUser [] = []; // using template

  // userList: any [] = [];

  // documentObj: any = {
  //   "documentId": 0,
  //   "documentName": "",
  //   "description": ""
  // }
  documentObj: Document = new Document();// using class

constructor(private http : HttpClient){

}
  

  // http = inject(HttpClient);

  // onSave(){
  //   debugger;
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddBulkDepartment", this.deptObj).subscribe((result:any)=>{
  //     console.log(result);
  //   }, error=>{
  //     debugger;
  //     console.log(error.status); // Example: 404
  //     console.log(error.statusText); // Example: "Not Found"
  //     console.log(error.error); // The actual error body content
  //   })
  // }

  onSave() {
    this.http.post("https://projectapi.gerasim.in/api/DocTracker/createDocument", this.documentObj).subscribe((res:any)=>{
      if(res.result) {
        console.log("result", + res)
        alert("Document Added SuccessFully!!!");
      } else {
        console.log("error", +res.message)
        alert(res.message)
      }
    })
  }

}
