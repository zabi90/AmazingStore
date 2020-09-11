import { Injectable } from '@angular/core';
import { Observable,from, Subject } from 'rxjs';
import {Product} from '../models/product'; 
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  subject : Subject<number>;

  cartList = new Array<Product>();

  constructor(private _snackBar: MatSnackBar) { 
    this.subject = new Subject();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  addItem(item:Product){
    this.cartList.push(item);
    this.subject.next( this.cartList.length);
    this.openSnackBar(item.title+" added into cart.","OK");
  }

  getTotal(){
    let total = 0;
    this.cartList.forEach((item:Product)=>{
        total = item.price + total;
    })
    return total;
  }

  removeItem(item:Product){
   
    let index  = this.cartList.findIndex(x => x.id == item.id);
    this.cartList.splice(index,1)
    this.subject.next( this.cartList.length);
    this.openSnackBar(item.title+" removed from cart.","OK");
  }

  clearItems(){
    this.cartList.splice(0,this.cartList.length)
    this.subject.next( this.cartList.length);
  }
}
