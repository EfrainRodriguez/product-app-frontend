import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../../models/product.model';
import { ProductHttpService } from '../../services/product-http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: string | null = null;
  @Input() product: Product | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productHttpService: ProductHttpService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id) {
        this.getProduct(this.id);
      }
    });
  }

  redirectToProductEdit() {
    this.router.navigate(['/product-edit', this.id]);
  }

  getProduct(id: string) {
    this.productHttpService.getProduct(id).subscribe((product) => {
      this.product = product as Product;
    });
  }
}
