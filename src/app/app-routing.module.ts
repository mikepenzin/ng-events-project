import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './events/events.component';

import { EventsResolver } from './resolvers/events.resolver';
import { CreateEventComponent } from './create-event/create-event.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '',  redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/:id', component: UserProfileComponent },
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
