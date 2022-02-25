import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  CreateEventComponent,
  EventsListComponent,
  EventDetailsComponent,
  CreateSessionComponent
} from './events/index';

import { 
  LoginComponent,
  UserProfileComponent,
  AuthGuardService as AuthGuard 
} from './auth/index';

const routes: Routes = [
  { path: '',  redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: 'events/:id/create-session', component: CreateSessionComponent },
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
