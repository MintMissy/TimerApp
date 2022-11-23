import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Timer } from '../../model/timer.model';
import { TimerFormDialogComponent } from '../timer-form-dialog/timer-form-dialog.component';
import { TimerService } from '../../data-access/timer.service';

@Component({
  selector: 'app-timer-page',
  templateUrl: './timer-page.component.html',
  styleUrls: ['./timer-page.component.scss'],
})
export class TimerPageComponent implements OnInit {
  timers$!: Observable<Timer[]>;

  constructor(private _timerService: TimerService, private _matDialog: MatDialog) {}

  ngOnInit(): void {
    this._timerService.loadTimers();
    this.timers$ = this._timerService.getTimers();
  }

  onToggleStopTimerButtonClick(id: string) {
    this._timerService.toggleTimerState(id);
  }

  onRemoveTimerButtonClick(id: string) {
    this._timerService.removeTimer(id);
  }

  onEditTimerButtonClick(id: string) {
    const timer = this._timerService.getTimer(id);
    if (timer === null) {
      return;
    }

    const timerFormDialog = this._matDialog.open(TimerFormDialogComponent, {
      data: timer,
    });

    if (!timer.stopped) {
      this._timerService.toggleTimerState(id);
    }

    timerFormDialog.afterClosed().subscribe((result) => {
      if (result === null || result === undefined || result <= 0) {
        return;
      }
      console.log(result);

      this._timerService.editTimer(id, result);
    });
  }

  onAddTimerButtonClick() {
    const timerFormDialog = this._matDialog.open(TimerFormDialogComponent, {
      data: null,
    });
    
    timerFormDialog.afterClosed().subscribe((result) => {
      if (result === null || result === undefined || result <= 0) {
        return;
      }
      this._timerService.createTimer(result);
    });
  }
}
