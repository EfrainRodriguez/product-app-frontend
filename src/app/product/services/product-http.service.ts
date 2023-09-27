import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  urlBase = `${environment.api}/products`;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.urlBase);
  }

  getProduct(id: string) {
    return this.http.get(`${this.urlBase}/${id}`);
  }

  createProduct(product: any) {
    return this.http.post(this.urlBase, product);
  }

  updateProduct(id: string, product: any) {
    return this.http.put(`${this.urlBase}/${id}`, product);
  }
}
