import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EventsService } from 'src/services/events.service';
import { Event } from 'src/shared/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  public event: Event = new Event;

  constructor(private route:ActivatedRoute, private eventsService:EventsService) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.updateEventdata(Number(paramMap.get('id')));
    });
  }

  public updateEventdata(id: Number): void {
    this.event = this.eventsService.getEventById(id);
  }

}
