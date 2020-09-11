import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { Router, NavigationEnd } from '@angular/router';
import {SearchTextServiceService} from '../services/search-text-service.service'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  
 
  searchText:string = "" 
  shouldSearchVisible = true;
  cartCount = 0;

  constructor(private cartService : CartServiceService,private searchTextService :SearchTextServiceService,router: Router ) { 
    this.routeEvent(router);
  
  }

  onSearchValueChanged(){
    this.searchTextService.onSearchTextChanged(this.searchText)
  }

  routeEvent(router: Router){
    router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        console.log(e)
        if(e.url === '/product-list' || e.url === '/'){
          this.shouldSearchVisible = true
        }else{
          this.shouldSearchVisible = false;
        }
      }
    });
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
