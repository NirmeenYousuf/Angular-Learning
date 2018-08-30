import { Component, OnInit, NgZone } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username : string ;
  public password : string ;
  constructor(public router: Router, public ngZone : NgZone) { 
   // this.username = 'test';
   // this.password = 'test';
  }

  ngOnInit() {
  }

  login() : void {
    if(this.username === 'abc' && this.password === 'abc')
    {
      this.router.navigate(["dashboard"]);
    }
  }

}
