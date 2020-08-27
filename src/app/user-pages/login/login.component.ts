import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users';
import { Accounts } from 'src/app/model/accounts';
import { AuthService } from 'src/app/service/auth.service';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  account : Accounts = new Accounts();

  constructor(public auth : AuthService,public api : ApiService, private router: Router) {

  }

  ngOnInit() {
  }

  async login() {
    let loginHelper = await this.api.getToken(this.account);
    console.log(loginHelper);

    if(loginHelper != null && loginHelper != undefined) {
      this.auth.setToken(loginHelper.token)
      this.router.navigateByUrl('/')
    } else {
      this.router.navigateByUrl('/user-pages/login')
    }
  }
}
