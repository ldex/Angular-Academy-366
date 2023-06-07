import { Component } from '@angular/core';
import { EMPTY, Observable, catchError, tap } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title: string = 'Products';
  //products: Product[];
  products$: Observable<Product[]>;
  selectedProduct: Product;
  productsNumber = 0;
  errorMessage: string;

  // Pagination
  pageSize = 5;
  start = 0;
  end = this.pageSize;
  pageNumber = 1;

  previousPage() {
    this.start -= this.pageSize;
    this.end -= this.pageSize;
    this.pageNumber--;
    this.selectedProduct = null;
  }

  nextPage() {
    this.start += this.pageSize;
    this.end += this.pageSize;
    this.pageNumber++;
    this.selectedProduct = null;
  }


  onSelect(product: Product) {
    this.selectedProduct = product;
  }

  constructor(private productService: ProductService) {

    this.products$ = productService
                        .products$
                        .pipe(
                          tap(products => this.productsNumber = products.length),
                          catchError(error => {
                            this.errorMessage = 'Erreur! ' + error.message;
                            return EMPTY;
                          })
                        );

    // productService
    //   .products$
    //   .subscribe({
    //     next: results => this.products = results,
    //     error: err => console.error(err)
    //   })
  }
}
