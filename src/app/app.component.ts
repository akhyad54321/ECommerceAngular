import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./_components/product-list/product-list.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductService } from './_service/product.service';
import { ProductCategoryMenuComponent } from "./_components/product-category-menu/product-category-menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, RouterLink, RouterLinkActive, FormsModule, ProductCategoryMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'angular-ecommerce';

  ngOnInit(): void {
  }

}
