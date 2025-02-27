import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Product, ProductsResponse } from '../../models/product';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
  standalone: false
})
export class ListingComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
      this.apiService.getProducts().subscribe({
        next: (data: ProductsResponse) => {
          this.products = data.products;
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  showProduct(id: number) {
    this.router.navigate([`/${id}`]);
  }

  getImageStyle(p: Product) {
    return {
      backgroundImage: `url('${p.photos[0]}')`,
    }
  }

  addToCart(p: Product) {
    this.apiService.addToCart(p);
  }

  removeFromCart(idx: number) {
    this.apiService.removeFromCart(idx);
  }

  incrementQty(p: Product) {

  }

  decrementQty(p: Product) {
    
  }
}
