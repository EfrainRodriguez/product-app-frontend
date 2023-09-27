import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductHttpService } from './services/product-http.service';
import { Product, PaginatedProductResponse } from './models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  isLoading = false;

  constructor(
    private router: Router,
    private productHttpService: ProductHttpService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  redirectToProductCreate() {
    this.router.navigate(['/product-create']);
  }

  getProducts() {
    this.isLoading = true;
    this.productHttpService.getProducts().subscribe((response) => {
      const formatedResponse = response as PaginatedProductResponse;
      this.products = formatedResponse.data;
      this.isLoading = false;
    });
  }
}
