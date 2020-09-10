import {Product} from  './product';

export class  OrderDetail{
    constructor(public name:string, public email:string, public address:string, public cartItems: Product[]){
    }
}