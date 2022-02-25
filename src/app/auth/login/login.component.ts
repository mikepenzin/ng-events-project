import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../index';
import { ToastrService } from 'ngx-toastr'

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


  constructor(private auth:AuthService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  authenticate() {
    if(!this.login || !this.password) {
      this.toastr.error("Unable to login!", "Please enter both Login and Password");
      return;
    }
    const authenticated = this.auth.authenticate(this.login, this.password);

    if (authenticated) {
      this.router.navigate(["/events"]);
    } else {
      this.toastr.error("Unable to login!", "Check your Login or Password.");
      return;
    }
  }

  signup() {
    if (!this.signupLogin || !this.signupPassword || !this.name || !this.lastname) {
      this.toastr.error("Unable to signup!", "Please all fields are required!");
      return;
    }
    const authenticated = this.auth.signup(this.login, this.password, this.name, this.lastname);

    if (authenticated) {
      this.router.navigate(["/events"]);
    } else {
      this.toastr.error("Unable to signup!", "Unable to finish signup process. Check all field are correct.");
      return;
    }
  }
}
