import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css',
})
export class TemplateComponent {

  employeeObject: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zip: '',
    isAcceptTerms: false
  }

  formValue: any;

  onSubmit() {
    debugger;
    this.formValue = this.employeeObject;
  }

  resetForm() {
    this.employeeObject = {
      firstName: '',
      lastName: '',
      userName: '',
      city: '',
      state: '',
      zip: '',
      isAcceptTerms: false
    }
  }
  // studentObj: any = {
  //   firstName: '',
  //   lastName: '',
  //   userName: '',
  //   city: '',
  //   state: '',
  //   zipCode: '',
  //   isAcceptTerms: false,
  // };
  // resetForm() {
  //   this.studentObj = {
  //     firstName: '',
  //     lastName: '',
  //     userName: '',
  //     city: '',
  //     state: '',
  //     zipCode: '',
  //     isAcceptTerms: false,
  //   };
  // }
}
