import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-product-detail-alert',
  templateUrl: './product-detail-alert.component.html',
  styleUrls: ['./product-detail-alert.component.css']
})
export class ProductDetailAlertComponent implements OnInit {
 

  @Output() newItemEvent = new EventEmitter<string>();

  @Input('display') block:string;

  @Input('productData') product:any;

  constructor(private cartService:CartServiceService) { 
    
  }

  ngOnInit(): void {

  }

  addItemToCart(product:any){
    this.cartService.addItem(product);
  }

  close(){
    this.newItemEvent.emit('none');
  }

}
