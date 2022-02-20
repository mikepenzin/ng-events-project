import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Event } from './event';
import events from '../common/events.json';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  
  private filteredEvents: Event[] = events.slice(0);

  constructor() { 
    
  }

  getEventById(id:Number): Event {
    return events.find( (e: { id: Number; }) => e.id === id ) || new Event();
  }

  searchEvents(searchEventsText: string) {
    this.filteredEvents = events.filter((e: { name: string; }) => e.name.toLocaleLowerCase().includes(searchEventsText.toLocaleLowerCase()));
  }
  
  getEvents(): Observable<Event[]> {
    let subject = new Subject<Event[]>();
    setTimeout(() => {subject.next(this.filteredEvents); subject.complete(); }, 100);

    return subject;
  }
}
