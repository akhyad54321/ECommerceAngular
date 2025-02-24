import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../_model/cart-item';
import { CartService } from '../../_service/cart.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-details',
  imports: [CommonModule, FormsModule, CurrencyPipe],
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css'
})
export class CartDetailsComponent implements OnInit{
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  isEmpty: boolean = true;

  constructor(private cartService: CartService){
    console.log('Cart Details Component Loaded');
  }
  
  ngOnInit(): void {
    this.listCartDetails();
  }


  listCartDetails(){
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.subscribe(data =>{
      this.totalPrice = data;
    });

    this.cartService.totalQuantity.subscribe(data =>{
      this.totalQuantity = data;
    });

    this.cartService.computeCartTotals();

  }

  increaseQuantity(theCartItem: CartItem){
    this.cartService.addToCart(theCartItem);
  }
  decreaseQuantity(theCartItem: CartItem){
    this.cartService.decreaseQuantity(theCartItem);
  }
  remove(theCartItem: CartItem){
    this.cartService.remove(theCartItem);
  }

}
