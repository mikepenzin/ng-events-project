import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/shared/session';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  @Input() sessions: Session[] | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
