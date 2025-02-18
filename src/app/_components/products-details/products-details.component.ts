import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Product } from '../../_model/product';
import { ProductService } from '../../_service/product.service';
import { CartService } from '../../_service/cart.service';
import { CartItem } from '../../_model/cart-item';

@Component({
  selector: 'app-products-details',
  imports: [FormsModule, CommonModule, RouterModule ],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit{

product!: Product;
  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.handleProductDetails();
    });
  }
  handleProductDetails(){
    const theProductId: number = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProduct(theProductId).subscribe(data =>{
      this.product = data;
      console.log( this.product);
    });
  }

  addToCart(){
    const theCartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);
  }

}
