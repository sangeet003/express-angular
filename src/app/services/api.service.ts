import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private _cart: any[] = [];
  
  get cart() {
    return this._cart;
  }

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('/assets/products.json');
  }

  addToCart(product: any) {
    this._cart.push(product);
  }

  removeFromCart(idx: number) {
    this._cart.splice(idx, 1);
  }
}
