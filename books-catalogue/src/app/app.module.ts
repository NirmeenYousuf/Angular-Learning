import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from  '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopBooksComponent } from './top-books/top-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    DashboardComponent,
    TopBooksComponent,
    AddBookComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
