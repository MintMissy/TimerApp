import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-timer-card',
  templateUrl: './add-timer-card.component.html',
  styleUrls: ['./add-timer-card.component.scss'],
})
export class AddTimerCardComponent implements OnInit {
  @Output() cardClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
