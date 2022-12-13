import { Book } from './../types/book';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnDestroy{

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  addToCart() {
    this.bookEmitter.emit(this.book)
  }

}
