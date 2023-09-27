import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  constructor(private router: Router) { }

  redirectToProductDetails() {
    this.router.navigate(['/product', 1]);
  }
}
