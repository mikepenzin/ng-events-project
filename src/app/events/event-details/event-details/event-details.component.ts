import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService, User } from 'src/app/auth/index';
import { Event, EventsService, Session } from '../../index';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  public event: Event | undefined = new Event;
  addMode: boolean = false;
  filteredSessions: Session[] = [];
  currentFilter: string = "";
  currentOrder: string = "desc";
  subscription: Subscription;
  currentUser: User | undefined;

  constructor(private route:ActivatedRoute, private eventsService:EventsService, private auth:AuthService) {
    this.subscription = eventsService.sessionsSearch$.subscribe(
      searchString => {
        this.searchSessions(searchString);
    });
  }

  ngOnInit(): void {
    // this.route.paramMap.subscribe( paramMap => {
    //   this.updateEventdata(Number(paramMap.get('id')));
    // });
    this.route.data.forEach((data) => { 
      this.event = data['event'];
      this.filteredSessions = this.event?.sessions ? this.event?.sessions.slice(0) : [];
      this.currentOrder == "asc" ? this.sortByVotes(true): this.sortByVotes(false);
      this.currentUser = this.auth.getCurrentUser();
      this.resetView();
    });
  }

  searchSessions(searchText: string) {
    this.filterByLevel('');
    this.filteredSessions = this.filteredSessions ? this.filteredSessions.filter((s) => { 
      return s.name?.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
    }): [];
  }

  filterByLevel(level: string) {
    if (level === "") {
      this.filteredSessions = this.event?.sessions.slice(0) || [];
    } else {
      this.filteredSessions = this.event?.sessions ? this.event.sessions.filter((s) => { return s.level.toLocaleLowerCase() === level.toLocaleLowerCase()}).slice(0) : [];
    }
    this.currentFilter = level;
    this.currentOrder == "asc" ? this.sortByVotes(true): this.sortByVotes(false);
  }

  sortByVotes(asc:boolean) {
    function compare( a:any, b:any ) {
      if ( a.voters.length < b.voters.length ) {
        return asc ? -1: 1;
      }
      if ( a.voters.length > b.voters.length ) {
        return asc ? 1 : -1;
      }
      return 0;
    }

    this.currentOrder = asc ? "asc" : "desc";
    this.filteredSessions.sort(compare);
  }

  resetView() {
    this.addMode = false;
  }

  // updateEventdata(id: Number): void {
  //   this.event = this.eventsService.getEventById(id);
  // }

  saveSession(session: Session) {
    console.log("## Modified Session: ", session);
    
    if (this.event && this.event?.sessions) {
      const eventToUpdateIndex = this.event?.sessions.findIndex((s) => {
        return s.id === session.id;
      })

      if(eventToUpdateIndex != undefined && eventToUpdateIndex > -1) {
        this.event.sessions[eventToUpdateIndex] = session;
      }
    }

    this.sortByVotes(this.currentOrder === "asc");
  }

  createSession(session: Session) {
    console.log("## New Session: ", session);

    if(!this.event) { return; }

    session.id = this.event.sessions?.length + 1;

    console.log("Going to save new session with ID: " + session.id);
    this.event.sessions.push(session);

    this.filterByLevel("");
    this.resetView();

  }

  changeAddMode(state: boolean) {
    this.addMode = state;
  }
}
