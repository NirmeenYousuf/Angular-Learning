import { Injectable } from '@angular/core';
import {Book} from './book';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn:'root'
})

export class BooksServiceService {

  booksUrl : string = 'http://localhost:3004/books';

  constructor(private http: HttpClient) { }

  /*getBooks() : Observable<Book[]>{
    return this.http.get('http://localhost:3004/books')
  }*/

  getBooks (): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
    .pipe(
      tap(books => console.log('fetched books')),
      catchError(this.handleError)
    );
  }

  getBook(id : number) : Observable<Book>{
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url)
    .pipe(
      tap(books => console.log('fetched books')),
      catchError(this.handleError)
    );
  }

  addBook (book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, httpOptions).pipe(
      tap((book: Book) => console.log('success')),
      catchError(this.handleError)
    );
  }

  deleteBook (book: Book | number): Observable<Book> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.booksUrl}/${id}`;
  
    return this.http.delete<Book>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted book id=${id}`)),
      catchError(this.handleError)
    );
  }

  updateBook (book: Book): Observable<any> {
    const url = `${this.booksUrl}/${book.id}`;
    return this.http.put(url, book, httpOptions).pipe(
      tap(_ => console.log(`updated book id=${book.id}`)),
      catchError(this.handleError)
    );
  }

 /* getBooksData() {
    this.http.get('http://localhost:3004/books')
    .subscribe(res => this.BookList =
    res as Book[]);
   }*/

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
      }
  
  
      

}
