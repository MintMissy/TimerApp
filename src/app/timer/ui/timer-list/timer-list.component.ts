import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Timer } from '../../model/timer.model';

@Component({
  selector: 'app-timer-list',
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.scss'],
})
export class TimerListComponent implements OnInit {
  @Input() timers!: Timer[];
  @Output() timerDeleteClick = new EventEmitter<string>();
  @Output() timerEditClick = new EventEmitter<string>();
  @Output() timerToggleStopClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
