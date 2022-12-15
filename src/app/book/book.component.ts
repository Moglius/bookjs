import { CartService } from './../services/cart.service';
import { Book } from './../types/book';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnDestroy{

  @Input() book: Book = {} as Book;
  inCart = false;

  constructor(private cartService: CartService){}

  ngOnDestroy(): void {
    console.log("hola");
  }

  addToCart() {
    this.inCart = true;
    this.cartService.add(this.book)
  }

  removeFromCart() {
    if (this.inCart) {
      this.inCart = false;
      this.cartService.removeFromCart(this.book);
    }
  }

}
