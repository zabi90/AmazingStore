import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  cartCount = 0;

  constructor(private cartService : CartServiceService) { 

  }

  ngOnInit(): void {
    this.showCartItemsCount()
  }

  private showCartItemsCount(){
    this.cartService.subject.subscribe({
      next: (v) => this.cartCount = v
    });
  }
}
