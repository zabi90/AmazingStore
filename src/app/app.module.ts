import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import {ProductServiceService} from './product-service.service';
import {CartServiceService} from './services/cart-service.service';
import { ProductDetailAlertComponent } from './product-detail-alert/product-detail-alert.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderPlaceDialogComponent } from './order-place-dialog/order-place-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ShoppingCartComponent,
    ProductDetailAlertComponent,
    OrderPlaceDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductServiceService,
    CartServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
