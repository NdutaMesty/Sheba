import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  selectedProduct: Observable<Product | undefined> | undefined;
  products: Observable<Product[]>;
  private productsCollection: AngularFirestoreCollection<Product>;

  constructor(private afs: AngularFirestore, private cartService: CartService) {
    this.productsCollection = afs.collection<Product>('products');
    this.products = this.productsCollection.valueChanges({ idField: 'id'});

  }

  addProductToCart(product: Product) {
    this.cartService.addProductToCart(product);
  }

  clickProduct(uid: string) {
    this.selectedProduct = this.productsCollection.doc(uid).valueChanges();
  }
}
