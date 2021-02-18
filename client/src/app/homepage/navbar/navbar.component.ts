import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private toastr: ToastrService, public router: Router) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return localStorage.getItem('token') ? true : false
  }

  logout() {
    localStorage.clear();
    this.toastr.warning('You are Logged Out')

    this.router.navigate(['/']);
  }

}
