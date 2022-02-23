import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsListComponent } from './events/events-list/events-list.component';

import { EventsResolver } from './events/events.resolver';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { LoginComponent } from './usr/login/login.component';
import { UserProfileComponent } from './usr/user-profile/user-profile.component';
import { 
  AuthGuardService as AuthGuard 
} from '../services/auth/auth-guard.service';

const routes: Routes = [
  { path: '',  redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: 'create-event', component: CreateEventComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'user/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: '**',  redirectTo: '/events', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
