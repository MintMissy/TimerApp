import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerCardComponent } from './timer/ui/timer-card/timer-card.component';
import { TimerListComponent } from './timer/ui/timer-card/timer-list/timer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerCardComponent,
    TimerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
