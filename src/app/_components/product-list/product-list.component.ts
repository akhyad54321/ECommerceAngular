import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './../../_service/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../_model/product';
import { CommonModule, CurrencyPipe, IMAGE_CONFIG, IMAGE_LOADER } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../_service/cart.service';
import { CartItem } from '../../_model/cart-item';


@Component({
  selector: 'app-product-list',
  imports: [HttpClientModule, CommonModule, CurrencyPipe, RouterLink, RouterModule, NgbModule, FormsModule],
  templateUrl: './product-list-grid.component.html',
  // templateUrl: './product-list-table.component.html',
  // templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  productData: Product[] = [];
  currentCategoryId: number = 1;
  searchMode: boolean = false;

  // Step: 3 for pagination: add pagination variables
  previousCategoryId: number = 1;
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  constructor(private productService: ProductService,
              private cartService: CartService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getProductList();
    });
  }

  getProductList() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    // console.log("searchMode = " + this.searchMode)
    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
    console.log("theKeyword = " + theKeyword)
    this.productService.getProductListBySearch(theKeyword).subscribe(result => {
      this.productData = result;
    });

  }

  handleListProducts() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    else {
      this.currentCategoryId = 1;
    }

    // Step: 4 add pagination variables in our method: STEP:5 In ,html page:
    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    // console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`);

    this.productService.getProductPaginate(this.thePageNumber - 1, this.thePageSize, this.currentCategoryId)
      .subscribe(data => {
        // console.log("dataaa = " + data);
        this.productData = data._embedded.products;
        this.thePageNumber = data.page.number + 1;
        this.thePageSize = data.page.size;
        this.theTotalElements = data.page.totalElements;
      }, error => {
        console.log(error.status);
        console.log(error.statusText);
        console.log(error.error);
      });

    // this.productService.getProductList(this.currentCategoryId).subscribe(data => {
    //   this.productData = data;
    // }, error => {
    //   console.log(error.status); // Example: 404
    //   console.log(error.statusText); // Example: "Not Found"
    //   console.log(error.error); //The actual error body content
    // });
  }

  
  addToCart(theProduct: Product) {
    console.log(`Adding to cart ${theProduct.name}, ${theProduct.unitPrice}`);
    
    let theCartItem = new CartItem(theProduct);
    this.cartService.addToCart(theCartItem);
    }


}
