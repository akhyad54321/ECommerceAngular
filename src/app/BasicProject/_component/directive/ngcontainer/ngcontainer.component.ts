import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-ngcontainer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngcontainer.component.html',
  styleUrl: './ngcontainer.component.css'
})
export class NgcontainerComponent {

http = inject(HttpClient);
formValue:any []= [];
isValueGot: boolean= false;

getAllUsers(){
  this.isValueGot = true;
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any)=>{
    // console.log(result);
    this.formValue = result;
    console.log(this.formValue);
    this.isValueGot = false;
  });
}

isContainer: boolean = false;

}