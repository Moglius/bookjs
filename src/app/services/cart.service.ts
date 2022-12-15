import { Book } from './../types/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Book[] = []

  add(book: Book){
    this.cart.push(book);
  }

  getCartItems(){
    return this.cart;
  }

  removeFromCart(book: Book) {
    this.cart.forEach( (item, idx) => {
      if (item.name === book.name) this.cart.splice(idx,1);
    });
  }

  isInCart(book: Book) {
    let exist = false;
    this.cart.forEach( (item) => {
      if (item.name === book.name) exist = true;
    });

    return exist;
  }
}
