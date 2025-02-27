import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Product, ProductsResponse } from '../../models/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  standalone: false
})
export class DetailComponent implements OnInit {
  pId = -1;
  product: any = null;
  

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {
  }

  ngOnInit() {
    this.pId = this.route.snapshot.params['id'];

    this.apiService.getProducts().subscribe({
      next: (data: ProductsResponse) => {
        this.product = data.products.find((p: Product) => p.id === Number(this.pId));
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
}
