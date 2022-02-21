import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventsService } from 'src/services/events.service';
import { Event } from 'src/shared/event';

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
      console.log(res)
      this.eventsList = res;
    });
  }
}
