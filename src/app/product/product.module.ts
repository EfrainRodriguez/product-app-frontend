import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductItemComponent } from './product-item/product-item.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BackButtonComponent } from './back-button/back-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProductItemComponent,
    PaginationComponent,
    FiltersComponent,
    ProductFormComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductComponent,
    ProductDetailsComponent,
    BackButtonComponent
  ],
  exports: [
    ProductItemComponent,
    PaginationComponent,
    FiltersComponent,
    ProductFormComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductComponent,
    ProductDetailsComponent,
    BackButtonComponent
  ]
})
export class ProductModule {}
