import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [ 
        animate(500, style({opacity:1})) 
      ]),
      transition(':leave', [ 
        animate(500, style({opacity:0})) 
      ])
    ])
  ]
})
export class AppComponent {
  public title = 'ngEvents';
  public loading = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      switch (true) {
          case event instanceof NavigationStart: {
              this.loading = true;
              break;
          }
          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            setTimeout(() => {
              this.loading = false;
            }, 1000);
            break;
          }
      }
  });
  }
}
