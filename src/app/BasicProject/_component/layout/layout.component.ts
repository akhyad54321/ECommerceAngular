import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{

  constructor(){

  }
  ngOnInit(): void {
   
  }

  // router = inject(Router)
  // onLogout(){
  //   localStorage.removeItem('loginUser');
  //   this.router.navigateByUrl('login');
  // }
}
