import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/shared/events.service';
import { Event } from 'src/shared/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventsList!: Event[];

  constructor(private eventsService: EventsService) {
    
  }

  ngOnInit(): void {

    this.eventsService.getEvents().subscribe(res => {
      console.log(res)
      this.eventsList = res;
    });
  }
}
