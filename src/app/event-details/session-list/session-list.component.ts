import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/shared/session';

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
  
  constructor() { }

  ngOnInit(): void {
    this.filteredSessions = this.sessions ? this.sessions.slice(0) : [];
    this.currentOrder == "asc" ? this.sortByVotes(true): this.sortByVotes(false);
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

}
