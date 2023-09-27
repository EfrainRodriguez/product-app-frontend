import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductHttpService } from '../../services/product-http.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  hasError = false;

  productCategories = [
    { value: 'technology', label: 'Technology' },
    { value: 'lifestyle', label: 'Lifestyle' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'health', label: 'Health' },
  ];

  @Input() isEditing = false;

  @Input() productForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    price: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    rating: new FormControl('1', [Validators.required]),
  });

  constructor(
    private productHttpService: ProductHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSubmit() {
    if (
      !this.productForm.value.name ||
      !this.productForm.value.price ||
      !this.productForm.value.stock ||
      !this.productForm.value.category ||
      !this.productForm.value.rating
    ) {
      this.hasError = true;
    } else {
      this.hasError = false;

      if (this.isEditing) {
        this.route.params.subscribe((params) => {
          this.productHttpService
            .updateProduct(params['id'], this.productForm.value)
            .subscribe(() => {
              this.router.navigate(['/product']);
              alert('Product updated successfully!');
            });
        });
      } else {
        this.productHttpService
          .createProduct({
            ...this.productForm.value,
            price: Number(this.productForm.value.price),
            stock: Number(this.productForm.value.stock),
            rating: Number(this.productForm.value.rating),
            category: this.productForm.value.category,
          })
          .subscribe(() => {
            this.productForm.reset();
            this.router.navigate(['/product']);
            alert('Product created successfully!');
          });
      }
    }
  }
}