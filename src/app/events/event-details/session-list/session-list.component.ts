import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/services/auth.service';
import { EventsService } from 'src/services/events.service';
import { Session } from 'src/shared/session/session';
import { User } from 'src/shared/user/user';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  @Input() sessions: Session[] | undefined;
  filteredSessions: Session[] = [];
  currentFilter: string = "";
  currentOrder: string = "asc";
  subscription: Subscription;
  currentUser: User | undefined;
  
  constructor(private eventsService: EventsService, private auth:AuthService) { 
    this.subscription = eventsService.sessionsSearch$.subscribe(
      searchString => {
        this.searchSessions(searchString);
    });
  }

  ngOnInit(): void {
    this.filteredSessions = this.sessions ? this.sessions.slice(0) : [];
    this.currentOrder == "asc" ? this.sortByVotes(true): this.sortByVotes(false);
    this.currentUser = this.auth.getCurrentUser();
  }

  searchSessions(searchText: string) {
    this.filterByLevel('');
    this.filteredSessions = this.filteredSessions ? this.filteredSessions.filter((s) => { 
      return s.name?.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
    }): [];
  }

  filterByLevel(level: string) {
    if (level === "") {
      this.filteredSessions = this.sessions || [];
    } else {
      this.filteredSessions = this.sessions ? this.sessions.filter((s) => { return s.level.toLocaleLowerCase() === level.toLocaleLowerCase()}) : [];
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
  
  isSessionUpvotedByUser(session: Session): boolean {
    if (this.currentUser) {
      if(!session) { return false; }
      return session.voters.some((v) => {return v === this.currentUser?.login});
    } else {
      return false;
    }
  }

  toggleVote(sessionID: number): void {
    if (this.currentUser && sessionID) {
        const id = this.sessions?.findIndex((s) => s.id === sessionID);
        if(id === undefined) return;
        const foundSession = this.sessions?.[id];
        if(foundSession && !this.isSessionUpvotedByUser(foundSession)) {
          foundSession?.voters.push(this.currentUser?.login); 
        } else {
          const indexToDelete = foundSession?.voters.indexOf(this.currentUser?.login);
          if(indexToDelete) {
            foundSession?.voters.splice(indexToDelete, 1);
          }
        }
    }
  }
}
