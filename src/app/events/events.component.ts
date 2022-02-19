import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/shared/events.service';
import { IEvent } from 'src/shared/ievent';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventsList!: IEvent[];

  constructor(private eventsService: EventsService) {
    
  }

  ngOnInit(): void {

    this.eventsService.getEvents().subscribe(res => {
      console.log(res)
      this.eventsList = res;
    });
  }

  // getEvents(): IEvent[] {
  //   return EventsService.getEvents().subscribe(res => {
    
  //     });
  // }
}
