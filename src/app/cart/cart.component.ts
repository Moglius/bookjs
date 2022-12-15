import { Book } from './../types/book';
import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(private cartService: CartService) {}

  getCartItems(){
    return this.cartService.getCartItems();
  }

}
