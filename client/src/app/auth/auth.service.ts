import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { User } from 'src/app/models/user.model';
import { JwtHelperService } from "@auth0/angular-jwt";
// import { NotifyService } from 'src/app/shared/services/notify.service';
import { BaseService } from "../shared/base.service";



@Injectable()

export class AuthService extends BaseService {

    constructor(
        public http: HttpClient,
        // public notifyService: NotifyService
    ) {
        super('auth');
    }

    login(data: User) {
        return this.http.post(this.url + 'login', data, this.getOptions())
    }


    register(data: User) {
        return this.http.post(this.url + 'register', data, this.getOptions())
    }


    isLoggedIn() {

        var token = localStorage.getItem('token');

        if (token) {

            const helper = new JwtHelperService();
            if (!helper.isTokenExpired(token)) {
                console.log(helper.decodeToken(token))
                console.log('Token available');
                return true;
            }
        }

        console.log('Token unavailable');

        // this.notifyService.showInfo('You are not logged in')

        return false;


        // here you can check if user is authenticated or not through his token 

    }









}