import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './../../_service/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../_model/product';
import { CommonModule, CurrencyPipe, IMAGE_CONFIG, IMAGE_LOADER } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [HttpClientModule, CommonModule, CurrencyPipe],
  templateUrl: './product-list-grid.component.html',
  // templateUrl: './product-list-table.component.html',
  // templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productData: Product[] = [];
  currentCategoryId: number = 1;
  searchMode: boolean = false;

  constructor(private productService: ProductService,
               private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getProductList();
    });
  }

  getProductList() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    console.log("searchMode = " + this.searchMode)
    if(this.searchMode){
        this.handleSearchProducts();
    }else{
      this.handleListProducts();
    }
  }

  handleSearchProducts(){
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
    console.log("theKeyword = " + theKeyword)
    this.productService.getProductListBySearch(theKeyword).subscribe(result =>{
      this.productData = result;
    });

  }

  handleListProducts(){
   const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

   if(hasCategoryId){
    this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
   }
   else{
    this.currentCategoryId = 1;
   }

    this.productService.getProductList(this.currentCategoryId).subscribe(data => {
      this.productData = data;
    }, error => {
      console.log(error.status); // Example: 404
      console.log(error.statusText); // Example: "Not Found"
      console.log(error.error); //The actual error body content
    });
  }


}
