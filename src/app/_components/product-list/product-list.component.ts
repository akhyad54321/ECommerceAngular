import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './../../_service/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../_model/product';
import { CommonModule, CurrencyPipe, IMAGE_CONFIG, IMAGE_LOADER } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [HttpClientModule, CommonModule, CurrencyPipe],
  templateUrl: './product-list-table.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productData: Product[] = [];

  // productService = inject(ProductService);

  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProductList().subscribe(data => {
      debugger;
      this.productData = data;
      console.log(this.productData[0].imageUrl)
      console.log(this.productData);
    }, error => {
      debugger;
      console.log(error.status); // Example: 404
      console.log(error.statusText); // Example: "Not Found"
      console.log(error.error); //The actual error body content
    });
  }


}
