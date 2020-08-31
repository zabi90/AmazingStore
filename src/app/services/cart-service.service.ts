import { Injectable } from '@angular/core';
import { Observable,from, Subject } from 'rxjs';
import {Product} from '../models/product'; 

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  subject : Subject<number>;

  cartList = new Array<Product>();
  constructor() { 
    this.subject = new Subject();
  }

  addItem(item:Product){
    this.cartList.push(item);
    this.subject.next( this.cartList.length);
  }

  getTotal(){
    let total = 0;
    this.cartList.forEach((item:Product)=>{
        total = item.price + total;
    })
    return total;
  }

  removeItem(item:any){
    debugger;
    let index  = this.cartList.findIndex(x => x.id == item.id);
    this.cartList.splice(index,1)
    this.subject.next( this.cartList.length);
  }
}
