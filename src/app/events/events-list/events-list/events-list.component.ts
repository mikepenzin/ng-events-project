import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventsService } from 'src/app/events/services/events.service';
import { Event } from '../../index';

@Component({
  selector: 'app-events',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  eventsList!: Event[];
  subscription: Subscription;

  constructor(private eventsService: EventsService) {
    this.subscription = eventsService.eventInfo$.subscribe(
      events => {
        this.eventsList = events;
    });
  }

  ngOnInit(): void {

    this.eventsService.getEvents().subscribe(res => {
      if(res !== undefined) {
        this.eventsList = res;
      }
    });
  }
}
