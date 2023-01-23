import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';

import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  selectedProduct: Product | undefined;
  products: Observable<Product[]>;
  private productsCollection: AngularFirestoreCollection<Product>;

  constructor(
    private afs: AngularFirestore,
    private cartService: CartService,
    private toastr: ToastrService
  ) {
    this.productsCollection = afs.collection<Product>('sheba_products');
    this.products = this.productsCollection.valueChanges({ idField: 'id'});

  }

  addProductToCart(product: Product | undefined) {
    if (!product) {
      return;
    }
    this.cartService.addProductToCart(product);
    this.toastr.success(`${product.title} has been added to cart.`)
  }

  clickProduct(product: Product) {
    this.selectedProduct = product
    console.log(product);
  }
}
