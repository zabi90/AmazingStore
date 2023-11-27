import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Product} from './models/product';

const BASE_URL: string = "https://private-ba0621-dummy95.apiary-mock.com/";
const PRODUCT_END_POINT: string = "products/1";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
 
  isError = false;
  errorMessage = "";

  products = new Array();
  constructor(private httpClient: HttpClient) {

  }

  public getProductList() {
    return this.httpClient.get<Product[]>( BASE_URL + PRODUCT_END_POINT)
    .pipe(
      catchError(this.handleError<Product[]>('productList',[]))
    );
  }
  public async getProducts(): Promise<any> {
    const respnose = await fetch("http://private-ba0621-dummy95.apiary-mock.com/products");
    const body = await respnose.json();
    this.products = body;
    return body;
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    this.isError = true;
    this.errorMessage = error.message;
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
