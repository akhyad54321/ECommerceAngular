import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
//how to declare data varibles:
//string, number, boolean, date

courseName: string = "Angular 18";
inputType = "checkbox";
inputType1 = "radio";

rollNo: number = 123;
isIndian:boolean = false;
currentDate: Date = new Date();
myClassName: string = "bg-primary";

constructor(){

}

// how to create function in angular:
showAlert(){
  //without parameters:
  console.log("Hello Ganesha");
}

printMusic(message: string){
  alert(message);
}

changeCourseName(){
  this.courseName = "React JS";
}

}
