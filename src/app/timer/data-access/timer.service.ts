import { Timer, TimerJson } from '../model/timer.model';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private timers: Timer[] = [];
  private LOCAL_STORAGE_KEY = 'timers';

  constructor() {}

  getTimers(): Timer[] {
    return this.timers;
  }

  loadTimers() {
    const timersJson = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    if (timersJson === null) {
      return;
    }

    const timers: TimerJson[] = JSON.parse(timersJson);
    for (const timerJson of timers) {
      this.addTimer(this.parseTimerFromJson(timerJson));
    }
  }

  createTimer(duration: number): Timer {
    const timer: Timer = {
      id: '',
      startDate: new Date(),
      endDate: new Date(Date.now() + duration * 1000),
    };
    this.addTimer(timer);
    return timer;
  }

  removeTimer(id: string): void {
    this.timers = this.timers.filter((timer) => timer.id !== id);
  }

  private addTimer(timer: Timer): void {
    this.timers.push(timer);
  }

  updateLocalStorage(): void {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.timers));
  }

  private parseTimerFromJson(json: TimerJson): Timer {
    return {
      id: json.id,
      startDate: new Date(json.startDate),
      endDate: new Date(json.endDate),
    };
  }
}
