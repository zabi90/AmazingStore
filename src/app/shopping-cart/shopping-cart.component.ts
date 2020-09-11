import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import {OrderDetail} from '../models/orderDetail';
import {MatDialog} from '@angular/material/dialog';
import {OrderPlaceDialogComponent} from '../order-place-dialog/order-place-dialog.component'
import { Router } from '@angular/router';

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

  constructor(private cartService : CartServiceService,public dialog: MatDialog,private router:Router) { 
    this.cartList = cartService.cartList;
    this.total = cartService.getTotal();
    this.orderDetail = new OrderDetail("","","", this.cartList);
  }

  ngOnInit(): void {
  }

  placeOrder(){
    debugger;
    this.orderDetails = JSON.stringify(this.orderDetail);
    this.openDialog()
    this.cartService.clearItems()
  }

  openDialog() {
    let dialogRef  = this.dialog.open(OrderPlaceDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate(['/']);
    });
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
