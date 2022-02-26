import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { Session, EventsService } from '../../../events/index';
import { User, AuthService } from '../../../auth/index';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  @Input() sessions: Session[] | undefined;
  @Output() saveSession = new EventEmitter();
  currentUser: User | undefined;
  
  constructor(private eventsService: EventsService, private auth:AuthService) { 
    
  }

  ngOnInit(): void {
    this.currentUser = this.auth.getCurrentUser();
  }

  saveNewSession(session:Session) {
    // if (this.sessions !== undefined) {
    //   const nextId = Math.max.apply(null, this.sessions.map(s => s.id));
    //   session.id = nextId + 1
    //   this.sessions.push(session);
    //   this.saveSession.emit(this.sessions);
    //   // this.eventsService.saveEvent(this.event).subscribe();
    //   // this.addMode = false
    // }
    this.saveSession.emit(session);
  }

  cancelAddSession() {
    // this.addMode = false
  }

  isSessionUpvotedByUser(session: Session): boolean {
    if (this.currentUser) {
      if(!session) { return false; }
      return session.voters.some((v) => {return v === this.currentUser?.login});
    } else {
      return false;
    }
  }

  toggleVote(sessionID: number | undefined, event: any): void {
    let foundSession;
    if (this.currentUser && sessionID) {
        const id = this.sessions?.findIndex((s) => s.id === sessionID);
        if(id === undefined) return;
        foundSession = this.sessions?.[id];
        if(foundSession && !this.isSessionUpvotedByUser(foundSession)) {
          foundSession?.voters.push(this.currentUser?.login); 
        } else {
          const indexToDelete = foundSession?.voters.indexOf(this.currentUser?.login);
          if(indexToDelete !== undefined && indexToDelete > -1 ) {
            foundSession?.voters.splice(indexToDelete, 1);
          }
        }
    }
    this.saveSession.emit(foundSession);
    event.stopPropagation();
    event.preventDefault();
  }
}
