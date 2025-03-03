import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductCategoryMenuComponent } from "./_components/product-category-menu/product-category-menu.component";
import { SearchComponent } from "./_components/search/search.component";
import { CartStatusComponent } from "./_components/cart-status/cart-status.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, FormsModule, ProductCategoryMenuComponent, SearchComponent, CartStatusComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'angular-ecommerce';
  router = inject(Router);

  ngOnInit(): void {
  }

  onSubmit(){
      this.router.navigateByUrl('/layout');
  }

}
