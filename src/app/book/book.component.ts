import { CartService } from './../services/cart.service';
import { Book } from './../types/book';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnDestroy, OnInit{

  @Input() book: Book = {} as Book;
  inCart = false;

  constructor(private cartService: CartService){ }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.inCart = this.cartService.isInCart(this.book);
  }


  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  addToCart() {
    this.inCart = true;
    this.cartService.add(this.book)
  }

  removeFromCart() {
    this.inCart = false;
    this.cartService.removeFromCart(this.book);
  }

}
