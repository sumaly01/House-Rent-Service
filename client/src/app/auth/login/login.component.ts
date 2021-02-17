import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user;
  constructor() {
    this.user = new User({})
  }

  ngOnInit() {
  }

  login() {
    console.log("user-->", this.user)
  }

}
