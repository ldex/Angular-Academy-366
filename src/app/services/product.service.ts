import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://storerestservice.azurewebsites.net/api/products/';
  products$: Observable<Product[]>;

  constructor(private http: HttpClient) {
    this.initProducts();
  }

  getProductById(id: number): Observable<Product> {
    return this
              .products$
              .pipe(
                map(products => products.find(product => product.id == id))
              )
  }

  initProducts() {
    this.products$ = this
                        .http
                        .get<Product[]>(this.baseUrl)
                        .pipe(
                          delay(1500), // juste pour la démo!!
                          tap(console.table),
                          shareReplay()
                        );
  }
}
