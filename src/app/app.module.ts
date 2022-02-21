import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsComponent } from './events/events.component';
import { AppSpinnerComponent } from './app-spinner/app-spinner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { CreateEventComponent } from './create-event/create-event.component';
import { SessionListComponent } from './event-details/session-list/session-list.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';  // <<<< import it here

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    EventsComponent,
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
