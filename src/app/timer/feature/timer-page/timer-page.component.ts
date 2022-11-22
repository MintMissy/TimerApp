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
    this._timerService.getTimers();
  }

  onToggleStopTimerButtonClick(id: string) {}

  onRemoveTimerButtonClick(id: string) {}

  onEditTimerButtonClick(id: string) {
    const timer = this._timerService.getTimer(id);
    if (timer === null) {
      return;
    }

    // const timerFormDialog = this._matDialog.open(TimerFormDialogComponent, {
    //   data: timer,
    // });

    // timerFormDialog.afterClosed().subscribe((result) => {
    //   console.log(result);
    // });
  }

  onAddTimerButtonClick() {
    const timerForm = this._matDialog.open(TimerFormDialogComponent, {
      data: null,
    });
  }
}
