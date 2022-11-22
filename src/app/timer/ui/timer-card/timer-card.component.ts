import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Timer } from '../../model/timer.model';

@Component({
  selector: 'app-timer-card',
  templateUrl: './timer-card.component.html',
  styleUrls: ['./timer-card.component.scss'],
})
export class TimerCardComponent implements OnInit {
  @Input() timer!: Timer;
  @Output() timerDeleteClick = new EventEmitter<string>();
  @Output() timerEditClick = new EventEmitter<string>();
  @Output() timerToggleStopClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
