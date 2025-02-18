import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductCategoryMenuComponent } from "./_components/product-category-menu/product-category-menu.component";
import { SearchComponent } from "./_components/search/search.component";
import { CartStatusComponent } from "./_components/cart-status/cart-status.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, FormsModule, ProductCategoryMenuComponent, SearchComponent, CartStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'angular-ecommerce';

  ngOnInit(): void {
  }

}
