import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  getCurrentRoute() {
    
    return this.router.url;
  }

  constructor(private eventService: EventsService, private router:Router) { 
    
  }

  ngOnInit(): void {
    
  }

  @Input() 
    title?: string;
  
}
