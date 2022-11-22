import { MatDialogModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimeFormatPipe } from './core/pipes/time-format.pipe';
import { TimerCardComponent } from './timer/ui/timer-card/timer-card.component';
import { TimerListComponent } from './timer/ui/timer-list/timer-list.component';
import { TimerPageComponent } from './timer/feature/timer-page/timer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerCardComponent,
    TimerListComponent,
    TimerPageComponent,
    TimeFormatPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, MatDialogModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
