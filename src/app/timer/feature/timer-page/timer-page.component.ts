import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Timer } from '../../model/timer.model';
import { TimerService } from '../../data-access/timer.service';

@Component({
  selector: 'app-timer-page',
  templateUrl: './timer-page.component.html',
  styleUrls: ['./timer-page.component.scss'],
})
export class TimerPageComponent implements OnInit {
  timers$!: Observable<Timer[]>;

  constructor(private _timerService: TimerService) {}

  ngOnInit(): void {
    this._timerService.loadTimers();
    this._timerService.getTimers();
  }

  onStopTimerButtonClick(id: string) {}

  onRemoveTimerButtonClick(id: string) {}
  
  onEditTimerButtonClick(id: string) {}
}
