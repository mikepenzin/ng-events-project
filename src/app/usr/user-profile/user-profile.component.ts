import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/services/auth.service';
import { User } from 'src/shared/user/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: User | undefined;
  name: string = "";
  lastname: string = "";
  subscription!: Subscription;
  
  constructor(private route:ActivatedRoute, private auth:AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.auth.getCurrentUser();
    this.name = this.currentUser?.name || "";
    this.lastname = this.currentUser?.lastName || "";
    console.log("name: " + this.name); 
    console.log("lastname: " + this.lastname); 

    this.subscription = this.auth.updatedUserInfo$.subscribe(
      user => {
        console.log("### Updated user: ", user);
        this.currentUser = user;
        this.name = this.currentUser?.name || "";
        this.lastname = this.currentUser?.lastName || "";
    });
  }

  save(): void {
    if(this.currentUser) {
      this.currentUser.name = this.name;
      this.currentUser.lastName = this.lastname;

      this.auth.setCurrentUser(this.currentUser);
    }
    
  }
}
