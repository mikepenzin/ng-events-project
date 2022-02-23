import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/services/auth/auth.service';
import { EventsService } from 'src/services/events.service';
import { User } from 'src/shared/user/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  public searchEventsText: string = "";
  public searchSessionsText: string = "";
  public currentUser: User | undefined;
  subscription!: Subscription;

  searchEvents(search:string) {
    console.log('it does nothing: ' + this.searchEventsText);
    this.eventService.searchEvents(search);
  }

  searchSessions(search: string) {
    this.eventService.searchSessions(search);
  }

  getCurrentRoute() {
    return this.router.url;
  }

  constructor(private eventService: EventsService, private router:Router, private auth:AuthService) { 
    this.router.events.subscribe( (e)=> {
      if(e instanceof NavigationStart) {
        this.searchEventsText = "";
        this.searchSessionsText = "";
        this.searchEvents("");
        this.searchSessions("");
      }
    })
  }

  ngOnInit(): void {
    this.searchEvents("");
    this.searchSessions("");
    this.currentUser = this.auth.getCurrentUser();

    this.subscription = this.auth.updatedUserInfo$.subscribe(
      user => {
        console.log("### Updated user: ", user);
        this.currentUser = user;
    });
  }

  @Input() 
    title?: string;


  logout() {
    const loggedout = this.auth.logout();

    if(loggedout) {
      this.router.navigate(["/events"]);
    }

  }
  
}
