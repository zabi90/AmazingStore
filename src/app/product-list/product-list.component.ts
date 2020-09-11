import { Component, OnInit, HostListener } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { CartServiceService } from '../services/cart-service.service';
import {Product} from '../models/product';

import {SearchTextServiceService } from '../services/search-text-service.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  durationInSeconds = 3;
  errorMessage = "";
  dialogState : string ="none";
  product:Product;
  isLoading:boolean = true;
  products:Product [] = [];
  temporyList:Product [] = [];
  constructor(public productService:ProductServiceService,private cartService:CartServiceService,private searchTextService : SearchTextServiceService) { 
    //this.loadProduct();
    this.searchTextService.subscribleSearchTextChange().subscribe((value)=>{
 
      this.products.splice(0,this.products.length)

      if(value === ''){
        
        this.temporyList.forEach((item)=>{
          this.products.push(item)
        })

      }else{
        this.temporyList.forEach((productItem)=>{
         
            if(productItem.title.includes(value)){
                //find
                this.products.push(productItem)
                console.log("Product search "+productItem.title)
            }
        })
      }
    
    });
  }

  private async loadProduct() {
    this.isLoading = true;
    this.products = await this.productService.getProducts();
    this.isLoading = false;
  }
 
  addToCart(product:Product){
    this.cartService.addItem(product)
  }
  navigateToDetail(product:Product){
    this.product = product;
    this.showDialog("block");
  }

  showDialog(value:string){
    this.dialogState = value;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.getProductList().subscribe((response:Product[])=>{
      
      response.forEach((item)=>{
        this.products.push(item)
        this.temporyList.push(item)
      })
      
      this.isLoading = false;
    });
  }

}
