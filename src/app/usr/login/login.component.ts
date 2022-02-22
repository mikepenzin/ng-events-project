import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string = "";
  password: string = "";
  name: string = "";
  lastname: string = "";
  signupPassword: string = "";
  signupLogin: string = "";


  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  authenticate() {
    const authenticated = this.auth.authenticate(this.login, this.password);

    if (authenticated) {
      this.router.navigate(["/events"]);
    } else {
      return;
    }
  }

  signup() {
    console.log("Sign up!");
    const authenticated = this.auth.signup(this.login, this.password, this.name, this.lastname);

    if (authenticated) {
      this.router.navigate(["/events"]);
    } else {
      return;
    }
  }
}
