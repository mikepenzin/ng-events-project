import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventsService } from '../index';

@Injectable({
  providedIn: 'root'
})
export class EventResolver implements Resolve<boolean> {

  constructor(private eventsService:EventsService, private router:Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    if (id !== undefined) {
        const event = this.eventsService.getEventById(Number(id));
        if (event) {
            return of(event);
        } else {
            this.router.navigate(['/events']);
            return of(false);
        }
    } else {
        this.router.navigate(['/events']);
        return of(false);
    }
    
  }
}
