import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventsService } from 'src/shared/events.service';

@Injectable({
  providedIn: 'root'
})
export class EventsResolver implements Resolve<boolean> {

  constructor(private eventsService:EventsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.eventsService.getEvents();
    // return of(true);
  }
}
