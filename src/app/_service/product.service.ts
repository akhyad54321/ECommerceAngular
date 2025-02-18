import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../_model/product';
import { ProductCategory } from '../_model/product-category';

// Type 2 :  Way to create Interface and add pagination in Angular:
interface GetResponsePagination {// Step: 1 for pagination
  _embedded:{
    products: Product[];
  },
  page:{
    size: number;
    totalElements: number;
    totalPages: number;
    number: number
  }
}

// Type 1 : Normal way to create Interface in Angular
interface GetResponse {
  _embedded:{
    products: Product[];
  };
}

interface GetResponsee {
  _embedded:{
    products: Product;
  };
}

interface GetResponseProductCategory{
  _embedded:{
    productCategory: ProductCategory[];
  };

}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseUrl = 'http://localhost:8080/api/products';
  private categoryUrl = 'http://localhost:8080/api/product-category';
  
  constructor(private http: HttpClient) {
    
  }

  getProductPaginate(thePage: number, thePageSize: number, // Step: 2 for pagination
                     theProductId: number): Observable<GetResponsePagination> {

    const productUrl = `${this.baseUrl}/search/findByCategoryId?id=${theProductId}&page=${thePage}&size=${thePageSize}`
    //NOTE: This url type should be formed : ===> http://localhost:8080/api/products?page=0&size=20 // http://localhost:8080/api/products/3&page=0&size=10}
    console.log("GaneshaaproductUrl = " + productUrl)
    return this.http.get<GetResponsePagination>(productUrl).pipe(// above and this method, op is same 
      map(response => response) // Step 3 is in product.list.component.ts
    )
  }

  getProduct(theProductId: number): Observable<Product> {
    const productUrl = `${this.baseUrl}/${theProductId}`;
    return this.http.get<Product>(productUrl).pipe(// above and this method, op is same 
      map(response => response)
    );
  }

  getProductListBySearch(theName: string): Observable<Product[]> {
    const url = `${this.baseUrl}/search/findByNameContaining?name=${theName}`
    return this.http.get<GetResponse>(url).pipe(
      map(response => response._embedded.products)
    );
  }

getProductCategoryList(): Observable<ProductCategory[]> {
  return this.http.get<GetResponseProductCategory>(this.categoryUrl).pipe(
    map(response => response._embedded.productCategory)
  );
}

    // Type :2  method calling by pasing id parameter
  getProductList(theCategoryId: number): Observable<Product[]> {
    const url = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
    return this.http.get<GetResponse>(url).pipe(
      map(response => response._embedded.products)
    );
  }

  // Type :1 normal method calling
  //  getProductList(): Observable<Product[]> {
  //   return this.http.get<GetResponse>(this.baseUrl).pipe(
  //     map(response => response._embedded.products)
  //   );
  // }

}
