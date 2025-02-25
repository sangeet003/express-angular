import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
  standalone: false
})
export class ListingComponent implements OnInit {
  products: any[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
      this.apiService.getProducts().subscribe({
        next: (data: any) => {
          this.products = data.products;
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  getImageStyle(p: any) {
    return {
      backgroundImage: `url('${p.photos[0]}')`,
    }
  }

  addToCart(p: any) {
    this.apiService.addToCart(p);
  }

  removeFromCart(idx: number) {
    this.apiService.removeFromCart(idx);
  }

  incrementQty(p: any) {

  }

  decrementQty(p: any) {
    
  }
}
