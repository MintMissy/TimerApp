import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Timer } from '../../model/timer.model';
import {
  getRemainingHoursFromTimer,
  getRemainingMinutesFromTimer,
  getRemainingSecondsFromTimer,
} from '../../util/timer.util';

@Component({
  selector: 'app-timer-form-dialog',
  templateUrl: './timer-form-dialog.component.html',
  styleUrls: ['./timer-form-dialog.component.scss'],
})
export class TimerFormDialogComponent implements OnInit {
  timerForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<TimerFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public timer: Timer
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  onDiscardClick() {}

  getNewTimerDuration() {
    let durationInMilliseconds = this.timerForm.get('secondsDuration')?.value * 1000;
    durationInMilliseconds += this.timerForm.get('minutesDuration')?.value * 60 * 1000;
    durationInMilliseconds += this.timerForm.get('hourDuration')?.value * 60 * 60 * 1000;

    return durationInMilliseconds;
  }

  buildForm() {
    this.timerForm = this._formBuilder.group({
      secondsDuration: [this.timer === null ? 0 : getRemainingSecondsFromTimer(this.timer)],
      minutesDuration: [this.timer === null ? 0 : getRemainingMinutesFromTimer(this.timer)],
      hourDuration: [this.timer === null ? 0 : getRemainingHoursFromTimer(this.timer)],
    });
  }
}
