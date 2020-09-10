import { Component, OnInit, HostListener } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { CartServiceService } from '../services/cart-service.service';
import {Product} from '../models/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  errorMessage = "";
  dialogState : string ="none";
  product:Product;
  isLoading:boolean = true;
  products:Product [] = [];

  constructor(public productService:ProductServiceService,private cartService:CartServiceService) { 
    //this.loadProduct();
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
      debugger;
      this.products = response;
      this.isLoading = false;
    });
  }

}
