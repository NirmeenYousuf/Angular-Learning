import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BooksServiceService} from '../books-service.service';

@Component({
  selector: 'app-top-books',
  templateUrl: './top-books.component.html',
  styleUrls: ['./top-books.component.css']
})
export class TopBooksComponent implements OnInit {

  displayedColumns: string[] = [ 'title'];
  BookList: Book[];

  constructor(private bookService : BooksServiceService) { }

  ngOnInit() {
    this.getBooksData();
  }

  getBooksData() {
    this.bookService.getBooks()
    .subscribe(res => this.BookList = res.slice(0, 5));
   }

}
