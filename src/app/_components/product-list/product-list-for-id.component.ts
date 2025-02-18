// import { HttpClientModule } from '@angular/common/http';
// import { ProductService } from './../../_service/product.service';
// import { Component, inject, OnInit } from '@angular/core';
// import { Product } from '../../_model/product';
// import { CommonModule, CurrencyPipe, IMAGE_CONFIG, IMAGE_LOADER } from '@angular/common';
// import { ActivatedRoute, RouterLink } from '@angular/router';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-product-list',
//   imports: [HttpClientModule, CommonModule, CurrencyPipe, NgbModule],
//   templateUrl: './product-list-grid.component.html',
//   // templateUrl: './product-list-table.component.html',
//   // templateUrl: './product-list.component.html',
//   styleUrl: './product-list.component.css'
// })
// export class ProductListComponent implements OnInit {
//   productData: Product[] = [];
//   currentCategoryId: number = 1;

//   // productService = inject(ProductService);

//   constructor(private productService: ProductService,
//                private route: ActivatedRoute) {
//   }

//   ngOnInit(): void {
//     this.route.paramMap.subscribe(() => {
//       this.getProductList();
//     });
//   }

//   getProductList() {

//     // check if "id" parameter is available or not
//    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

//    if(hasCategoryId){
//     // get the "id" param String. Convert string to a number using the "+" symbol
//     this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!; //(+) this plus sign has been used to convert string value to number value:
//    }
//    else{
//     // if not categoryId available.... set default categoryId as 1
//     this.currentCategoryId = 1;
//    }

//   //  now get the products for the given category id
//     this.productService.getProductList(this.currentCategoryId).subscribe(data => {
//       this.productData = data;
//       // console.log(this.productData);
//     }, error => {
//       console.log(error.status); // Example: 404
//       console.log(error.statusText); // Example: "Not Found"
//       console.log(error.error); //The actual error body content
//     });
//   }


// }
