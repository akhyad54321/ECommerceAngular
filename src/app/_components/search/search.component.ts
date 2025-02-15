import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../_service/product.service';
import { Product } from '../../_model/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterEvent, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule, RouterModule, RouterLink ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  nameValue: string ='';
  productData: Product[] = [];

  constructor(private productService : ProductService){

  }
  ngOnInit(): void {

  }

}
