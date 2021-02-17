import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user;
  constructor() {
    this.user = new User({});
  }

  ngOnInit() {
  }

  register() {
    console.log("this.user-->", this.user)
  }

}
