import { FormsModule } from '@angular/forms';
import { ProductService } from '../../_service/product.service';
import { ProductCategory } from './../../_model/product-category';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterEvent, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-category-menu',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.css'
})
export class ProductCategoryMenuComponent implements OnInit {
  productCategories: ProductCategory[] = [];

  constructor(private productService: ProductService){
  }

  ngOnInit(): void {
    this.getProductCategory();
  }

  getProductCategory(){
    this.productService.getProductCategoryList().subscribe( data => {
      this.productCategories = data;
      // debugger;
      console.log("Product Categories = " + JSON.stringify(data));
    }, error => {
      console.log(error.status); // Example: 404
      console.log(error.statusText); // Example: "Not Found"
      console.log(error.error); //The actual error body content
    });
  }

}
