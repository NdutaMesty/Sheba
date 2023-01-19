import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartProducts;
  totalPrice;

  constructor(private cartService: CartService) {
    this.cartProducts = cartService.myData$;
    this.totalPrice = cartService.totalPrice$;
  }

  removeCartItem(index: number) {
    console.log('here');
    this.cartService.removeProductFromCart(index);
  }

  ngOnInit() {
    this.cartService.getCartProducts();
  }
}
