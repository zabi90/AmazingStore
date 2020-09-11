import { Injectable } from '@angular/core';
import { Observable,from, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchTextServiceService {

 private searchText:string =""
 private searchTextSubject :BehaviorSubject<string>

  constructor() {
    this.searchTextSubject = new BehaviorSubject(this.searchText);
   }

  onSearchTextChanged(value:string){
    this.searchText = value
    this.searchTextSubject.next( this.searchText)
  }

  subscribleSearchTextChange(){
    return this.searchTextSubject;
  }
}
