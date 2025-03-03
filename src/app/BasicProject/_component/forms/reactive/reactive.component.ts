import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule, JsonPipe ],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
    lastName: new FormControl("", [Validators.required, Validators.nullValidator]),
    userName: new FormControl("", [Validators.email]),
    city: new FormControl(),
    state: new FormControl(),
    zip: new FormControl(),
    isAcceptTerms: new FormControl(),
  });

  formValue: any;
  onSubmit(){
    this.formValue = this.studentForm.value;
  }

  onReset(){
  this.studentForm.reset();
  }
}
