import { Component } from '@angular/core';
//import { Http, RequestOptions, Headers } from '@angular/http';
//import {Book} from './book';
//import { Observable } from 'rxjs';
//import { Console } from '@angular/core/src/console';
//import { catchError, map, tap } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { catchError, map, tap } from 'rxjs/operators';

//const httpOptions = {
//  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //BookList: Book[];
  //newBook : Book;
  //test : string = 'start';
  
 constructor() {  
  
 }

 /* getBooksData() {
  this.http.get('http://localhost:3004/books')
  .subscribe(res => this.BookList =
  res as Book[]);
 }

 addBook(){
  this.test = 'called';
  this.newBook = {
    id : 7,
    title : 'book 6',
    author : 'author 3'
  };
  this.addBookFinal(this.newBook).subscribe(book => {
    console.log(book.title);
  });
 }
 /*addBook() : Observable<number>{
  this.test = 'called';
  this.newBook = {
    id : 6,
    title : 'book 6',
    author : 'author 3'
  };
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: cpHeaders });
  return this.http.post('http://localhost:3004/books',this.newBook,options)
  //.pipe(
   // tap((Response: Book) => console.log('succeess')),
   // catchError(this.handleError)
  //);

  .map(success => success.status)
 .catch(this.handleError);
 // .pipe(
  //  tap((book: Book))
  //);
  //.map(success => success.status);
 }*/
/*
 private handleError (error: Response | any) {
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
