import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { ProductHttpService } from './services/product-http.service';
import { Product, PaginatedProductResponse } from './models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnChanges  {
  products: Product[] = [];
  isLoading = false;
  page = 0;
  limit = 5;
  sort = -1;
  count = 0;

  constructor(
    private router: Router,
    private productHttpService: ProductHttpService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnChanges(changes: any) {
    this.getProducts();
  }

  redirectToProductCreate() {
    this.router.navigate(['/product-create']);
  }

  getProducts() {
    this.isLoading = true;
    this.productHttpService
      .getProducts(
        `page=${this.page}&limit=${this.limit}&sort=${this.sort}`
      )
      .subscribe((response) => {
        const formatedResponse = response as PaginatedProductResponse;
        this.products = formatedResponse.data;
        this.count = formatedResponse.count;
        this.limit = formatedResponse.limit;
        this.page = formatedResponse.page;
        this.isLoading = false;
      });
  }

  changeLimit(limit: string | number) {
    this.limit = Number(limit);
    this.getProducts();
  }

  changePage(action: string) {
    if (action === 'next') {
      this.page++;
    } else {
      this.page--;
    }
    this.getProducts();
  }
}
