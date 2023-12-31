import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './modules/product/product.component';
import { ProductDetailsComponent } from './modules/product/components/product-details/product-details.component';
import { ProductCreateComponent } from './modules/product/components/product-create/product-create.component';
import { ProductEditComponent } from './modules/product/components/product-edit/product-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'product-create', component: ProductCreateComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
