import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import {Product} from '../models/product';
import {OrderDetail} from '../models/orderDetail';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  
  cartList:any;
  total:number;
  orderDetails : string ="";
  orderDetail: OrderDetail;

  constructor(private cartService : CartServiceService) { 
    this.cartList = cartService.cartList;
    this.total = cartService.getTotal();
    this.orderDetail = new OrderDetail("","","", this.cartList);
  }

  ngOnInit(): void {
  }

  placeOrder(){
    debugger;
    this.orderDetails = JSON.stringify(this.orderDetail);
  }

  onNameChanged(name:string){
    
  }

  onEmailChanged(email:string){

  }

  onAddressChanged(address:string){
   
  }

  onRemove(item:any){
    this.cartService.removeItem(item)
    this.total = this.cartService.getTotal();
  }

}
