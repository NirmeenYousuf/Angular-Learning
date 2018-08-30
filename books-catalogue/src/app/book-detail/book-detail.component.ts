import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Book} from '../book';
import {BooksServiceService} from '../books-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})


export class BookDetailComponent implements OnInit {

  @Input() book:Book;
  constructor(private bookService : BooksServiceService, private route: ActivatedRoute,
  private location : Location) { }

  ngOnInit() {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id)
      .subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }

  UpdateBook(): void {
    this.bookService.updateBook(this.book)
      .subscribe(() => this.goBack());
  }

}
