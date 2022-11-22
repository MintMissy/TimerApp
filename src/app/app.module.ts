import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { TimerCardComponent } from './timer/ui/timer-card/timer-card.component';
import { TimerListComponent } from './timer/ui/timer-list/timer-list.component';
import { TimerPageComponent } from './timer/feature/timer-page/timer-page.component';

@NgModule({
  declarations: [AppComponent, TimerCardComponent, TimerListComponent, TimerPageComponent],
  imports: [BrowserModule, AppRoutingModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
