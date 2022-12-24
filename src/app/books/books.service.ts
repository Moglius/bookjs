import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  getBooks() {
    return [
      {
        name: 'clean code',
        author: 'robert martin',
        src: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        price: 500
      },
      {
        name: 'clean architecture',
        author: 'robert martin',
        src: 'https://m.media-amazon.com/images/P/0134494164.01._SCLZZZZZZZ_SX500_.jpg',
        price: 400
      },
      {
        name: 'Engineers Survival Guide',
        author: 'Merih Taze',
        src: 'https://m.media-amazon.com/images/P/B09MBZBGFK.01._SCLZZZZZZZ_SX500_.jpg',
        price: 400
      },
      {
        name: 'the Pragmatic programmer',
        author: 'david Thomas',
        src: 'https://m.media-amazon.com/images/I/71f743sOPoL.jpg',
        price: 550
      }
    ]
  }
}
