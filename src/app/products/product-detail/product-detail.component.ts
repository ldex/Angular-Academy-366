import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) {

    let id = + activatedRoute.snapshot.params['id'];
    this
      .productService
      .getProductById(id)
      .subscribe(
        result => this.product = result
      )

  }

}
