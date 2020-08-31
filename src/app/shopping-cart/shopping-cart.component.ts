import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  isError = false;

  name:string = "";
  email:string="";
  address:string="";
  
  cartList:any;
  total:number;
  orderDetails : string ="";
  constructor(private cartService : CartServiceService) { 
    this.cartList = cartService.cartList;
    this.total = cartService.getTotal();
  }

  ngOnInit(): void {
  }

  placeOrder(){
    debugger;
    this.orderDetails = JSON.stringify({name:this.name,email:this.email,address:this.address,items:this.cartList});
  }

  onNameChanged(name:string){
    this.isError = false;
    this.name = name;
  }

  onEmailChanged(email:string){
    this.isError = false;
    this.email = email;
  }

  onAddressChanged(address:string){
    this.isError = false;
    this.address = address;
  }

  onRemove(item:any){
    this.cartService.removeItem(item)
    this.total = this.cartService.getTotal();
  }

}
