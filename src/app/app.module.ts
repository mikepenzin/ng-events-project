import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { 
  NavBarComponent 
} from './nav-bar/index';

import { 
  CollapsibleWellComponent, 
  AppSpinnerComponent 
} from './common/index';

import {
  DurationPipe,
  EventDetailsComponent,
  EventsListComponent,
  CreateEventComponent,
  SessionListComponent,
  CreateSessionComponent,
  EventThumbnailComponent
} from './events/index';

import {
  LoginComponent,
  UserProfileComponent
} from './auth/index';

import { 
  NotFoundErrorComponent 
} from './errors/index';

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
    UserProfileComponent,
    CollapsibleWellComponent,
    DurationPipe,
    CreateSessionComponent,
    NotFoundErrorComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
