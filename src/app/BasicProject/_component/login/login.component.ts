import { routes } from './../../app.routes';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule, ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObject: any = {
    username: '',
    password: ''
  }

  router = inject(Router)
  onClick(){
    if(this.userObject.username == "admin" && this.userObject.password == "admin"){
      alert("Login Success");
      localStorage.setItem('loginUser',this.userObject.username);
      this.router.navigateByUrl('layout');
    }else{
      alert("Invalid Credentials");
    }
  }

}
