import { Component, OnInit } from '@angular/core';
import { CartService } from '../../_service/cart.service';
import { Subject } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-status',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart-status.component.html',
  styleUrl: './cart-status.component.css'
})
export class CartStatusComponent implements OnInit{
  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {

  }
  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    
    this.cartService.totalPrice.subscribe(data =>{
      this.totalPrice = data;
      console.log("totalPrice = " + this.totalPrice);
    });

    this.cartService.totalQuantity.subscribe(data =>{
      this.totalQuantity = data;
      console.log("totalQuantity = " + this.totalQuantity);
    });
  }
}


