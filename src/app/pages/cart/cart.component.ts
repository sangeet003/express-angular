import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  standalone: false
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
      this.cartItems = this.apiService.cart
  }


  getImageStyle(p: Product) {
    return {
      backgroundImage: `url('${p.photos[0]}')`,
    }
  }

}
