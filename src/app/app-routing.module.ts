import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  CreateEventComponent,
  EventsListComponent,
  EventDetailsComponent,
  CreateSessionComponent,
  EventsResolver,
  EventResolver
} from './events/index';

import { 
  LoginComponent,
  UserProfileComponent,
  AuthGuardService as AuthGuard 
} from './auth/index';

import {
  NotFoundErrorComponent
} from './errors/index'

const routes: Routes = [
  { path: '',  redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventsListComponent },
  { path: 'event/:id', component: EventDetailsComponent, resolve: { event: EventResolver }},
  { path: 'create-event', component: CreateEventComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'user/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: '**',  component: NotFoundErrorComponent },
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
