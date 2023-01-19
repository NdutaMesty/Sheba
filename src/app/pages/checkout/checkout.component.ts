import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  cartProducts;
  totalPrice;

  constructor(private cartService: CartService) {
    this.cartProducts = cartService.myData$;
    this.totalPrice = cartService.totalPrice$;
  }

  ngOnInit() {
    this.cartService.getCartProducts();
  }
}
