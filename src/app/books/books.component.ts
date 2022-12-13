import { BooksService } from './books.service';
import { Book } from './../types/book';
import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  myName = '';
  isDisable = false;

  cart: Book[] = [];

  books: Book[] = []

  constructor(private bookService: BooksService) {
    this.books = bookService.getBooks()
  }

  handleClick() {
    this.isDisable = !this.isDisable;
  }

  handleInput(event: any) {
    this.myName = event.target.value;
  }

  addToCart(book: Book){

    this.cart.push(book)

  }

}
