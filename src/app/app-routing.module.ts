import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ProductListComponent} from './product-list/product-list.component';
import {DownloaderComponent} from './doument.downloader/doument.downloader.component';


const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'shopping-cart',component:ShoppingCartComponent},
  {path:'document-test',component:DownloaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
