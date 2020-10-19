import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ProductListComponent} from './product-list/product-list.component';


const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'shopping-cart',component:ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
