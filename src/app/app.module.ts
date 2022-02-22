import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { AppSpinnerComponent } from './app-spinner/app-spinner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { LoginComponent } from './usr/login/login.component';
import { UserProfileComponent } from './usr/user-profile/user-profile.component'; 


@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    EventsListComponent,
    AppSpinnerComponent,
    NavBarComponent,
    CreateEventComponent,
    SessionListComponent,
    LoginComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
