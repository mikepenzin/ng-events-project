import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Event } from '../index';
import events from 'src/assets/seed/events.json';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  
  private filteredEvents: Event[] | undefined = events.slice(0);

  constructor() { 
    
  }

  getEventById(id:Number): Event | undefined {
    return events.find( (e: { id: Number; }) => e.id === id ) || undefined;
  }

  searchEvents(searchEventsText: string) {
    this.filteredEvents = events.filter((e: { name: string; }) => e.name.toLocaleLowerCase().includes(searchEventsText.toLocaleLowerCase()));

    this.getEventsInfo(this.filteredEvents);
  }

  searchSessions(searchSessionText: string) {
    this.getSessionSearch(searchSessionText);
  }
  
  getEvents(): Observable<Event[] | undefined> {
    let subject = new Subject<Event[] | undefined>();
    setTimeout(() => {subject.next(this.filteredEvents); subject.complete(); }, 100);

    return subject;
  }

  private eventsInfoSource = new Subject<Event[]>();
  eventInfo$ = this.eventsInfoSource.asObservable();

  getEventsInfo(events: Event[]) {
    this.eventsInfoSource.next(events);
  }

  private sessionSearchSource = new Subject<string>();
  sessionsSearch$ = this.sessionSearchSource.asObservable();

  getSessionSearch(searchSession: string) {
    this.sessionSearchSource.next(searchSession);
  }

  saveEvent() {
    
  }
}
