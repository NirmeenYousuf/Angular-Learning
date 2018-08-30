import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BooksServiceService} from '../books-service.service';
//import {MatPaginator, MatSort} from '@angular/material';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'title', 'author', 'update', 'delete'];
  BookList: Book[];
  display = false;

  //resultsLength = 10;

  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;

  constructor(private bookService : BooksServiceService) { 
    
  }

  ngOnInit() {
    this.display = true;
   // setTimeout(this.getBooksData,200);
    this.getBooksData();
  }

 /* getBooksData() {
    this.http.get('http://localhost:3004/books')
    .subscribe(res => this.BookList =
    res as Book[]);
   }
*/

getBooksData() {
  this.bookService.getBooks()
  //.subscribe(res => this.BookList = res as Book[]);
  .subscribe(res => {this.BookList = res; 
    this.display = false;
  });
 }


 /*getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}*/

  

   DeleteBook(book: Book){
     this.BookList = this.BookList.filter(b => b !== book);
     this.bookService.deleteBook(book).subscribe();     
   }

}
