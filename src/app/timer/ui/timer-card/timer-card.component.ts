import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

import { Timer } from '../../model/timer.model';

@Component({
  selector: 'app-timer-card',
  templateUrl: './timer-card.component.html',
  styleUrls: ['./timer-card.component.scss'],
})
export class TimerCardComponent implements OnInit, OnDestroy {
  @Input() timer!: Timer;
  @Output() timerDeleteClick = new EventEmitter<string>();
  @Output() timerEditClick = new EventEmitter<string>();
  @Output() timerToggleStopClick = new EventEmitter<string>();
  refreshSubscription!: Subscription;
  leftTime: number = 0;

  constructor(private _detector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.refreshSubscription = interval(1000).subscribe(() => {
      if (this.timer.stopped) {
        this.leftTime = this.timer.endDate.getTime() - this.timer.stopDate.getTime();
      } else {
        this.leftTime = this.timer.endDate.getTime() - Date.now();
      }
    });
  }

  ngOnDestroy(): void {
    this.refreshSubscription.unsubscribe();
  }
}
