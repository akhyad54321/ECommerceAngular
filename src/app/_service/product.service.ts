import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../_model/product';
import { ProductCategory } from '../_model/product-category';

interface GetResponse {
  _embedded:{
    products: Product[];
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
