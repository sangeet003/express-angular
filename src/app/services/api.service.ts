import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductsResponse } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private _cart: Product[] = [];
  
  get cart(): Product[] {
    return this._cart;
  }

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>('/assets/products.json');
  }

  addToCart(product: Product) {
    this._cart.push(product);
  }

  removeFromCart(idx: number) {
    this._cart.splice(idx, 1);
  }
}
