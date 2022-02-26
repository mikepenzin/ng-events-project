import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../index'

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: Event | undefined; 
  constructor() { }

  ngOnInit(): void {

  }

}
