import { Component, Input, OnInit } from '@angular/core';

import { EventsService } from 'src/shared/events.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public searchEventsText: string = "";
  
  searchEvents() {
    console.log('it does nothing', this.searchEventsText);
    this.eventService.searchEvents(this.searchEventsText);
  }

  constructor(private eventService: EventsService) { 

  }

  ngOnInit(): void {
    
  }

  @Input() 
    title?: string;
  
}
