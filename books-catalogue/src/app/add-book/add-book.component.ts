import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import { Observable } from 'rxjs';
import { Console } from '@angular/core/src/console';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { catchError, map, tap } from 'rxjs/operators';
import {BooksServiceService} from '../books-service.service';

//const httpOptions = {
 // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//};

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  //BookList: Book[];
  newBook : Book;
  id : number;
  title : string;
  author  : string;
  display = false;

  constructor(private bookService : BooksServiceService) { }

  ngOnInit() {
  }

  /*AddBook(){
    this.newBook = {
      id : this.id,
      title : this.title,
      author : this.author
    };
    this.addBookFinal(this.newBook).subscribe(book => {
      console.log(book.title);
    });
   }*/

   AddBook(){
    this.display=true;
    this.newBook = {
      id : this.id,
      title : this.title,
      author : this.author
    };
    this.bookService.addBook(this.newBook).subscribe(book => {
      console.log(book.title);
      this.clearVariables();
      this.display=false;
    });
   }


   clearVariables() : void{
     this.id=null;
     this.title="";
     this.author="";
   }

  /* private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
      }
  
  
      addBookFinal (book: Book): Observable<Book> {
        return this.http.post<Book>('http://localhost:3004/books', book, httpOptions).pipe(
          tap((book: Book) => console.log('success')),
          catchError(this.handleError)
        );
      }*/

}
