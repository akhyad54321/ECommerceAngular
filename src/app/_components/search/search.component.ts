import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../_service/product.service';
import { Product } from '../../_model/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterEvent, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule, RouterModule ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  nameValue: string ='';
  productData: Product[] = [];
  searchMode: boolean = false;


  constructor(private productService : ProductService,
     private router: Router, private route: ActivatedRoute) {

   }

  ngOnInit(): void {

  }

  doSearch(){
    const nameValue = this.nameValue;
    console.log("nameValue = " + nameValue);
    this.router.navigateByUrl(`/search/${nameValue}`)
  }

}

