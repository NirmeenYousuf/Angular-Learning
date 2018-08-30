import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BooksComponent }   from './books/books.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TopBooksComponent} from './top-books/top-books.component';
import {AddBookComponent} from './add-book/add-book.component';
import {BookDetailComponent} from './book-detail/book-detail.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, 
    children: [
      { path: '', component: TopBooksComponent },
      { path: 'books', component: BooksComponent },
      { path: 'newBook', component: AddBookComponent},
      { path: 'detail/:id', component: BookDetailComponent}
    ]
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
