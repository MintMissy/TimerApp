import { Timer, TimerJson } from '../model/timer.model';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  constructor() {}

  parseTimerFromJson(json: TimerJson): Timer {
    return {
      startDate: new Date(json.startDate),
      endDate: new Date(json.endDate),
    };
  }
}
