import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  standalone: false
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
      this.cartItems = this.apiService.cart
  }


  getImageStyle(p: any) {
    return {
      backgroundImage: `url('${p.photos[0]}')`,
    }
  }

}
