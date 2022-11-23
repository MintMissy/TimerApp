import { AddTimerCardComponent } from './timer/ui/add-timer-card/add-timer-card.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TimeFormatPipe } from './core/pipes/time-format.pipe';
import { TimerCardComponent } from './timer/ui/timer-card/timer-card.component';
import { TimerFormDialogComponent } from './timer/feature/timer-form-dialog/timer-form-dialog.component';
import { TimerListComponent } from './timer/ui/timer-list/timer-list.component';
import { TimerPageComponent } from './timer/feature/timer-page/timer-page.component';
@NgModule({
  declarations: [
    AppComponent,
    TimerCardComponent,
    TimerListComponent,
    TimerPageComponent,
    TimeFormatPipe,
    TimerFormDialogComponent,
    AddTimerCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
