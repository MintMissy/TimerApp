import { BehaviorSubject, Observable } from 'rxjs';
import { Timer, TimerJson } from '../model/timer.model';

import { Injectable } from '@angular/core';
import { getRandomUid } from 'src/app/core/util/id.util';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private timers$ = new BehaviorSubject<Timer[]>([]);
  private LOCAL_STORAGE_KEY = 'timers';

  constructor() {}

  getTimers(): Observable<Timer[]> {
    return this.timers$.asObservable();
  }

  getTimer(id: string): Timer | null {
    const timerList = this.timers$.value.filter((timer) => timer.id === id);
    if (timerList.length === 0) {
      return null;
    }

    return timerList[0];
  }

  loadTimers() {
    const timersJson = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    if (timersJson === null) {
      return;
    }

    const timers: TimerJson[] = JSON.parse(timersJson);
    this.timers$.next(timers.map((timer) => this.parseTimerFromJson(timer)));
  }

  createTimer(duration: number): Timer {
    const timer: Timer = {
      id: getRandomUid(),
      startDate: new Date(),
      endDate: new Date(Date.now() + duration),
      stopDate: new Date(),
      stopped: false,
    };
    this.addTimer(timer);
    return timer;
  }

  removeTimer(id: string): void {
    this.timers$.next([...this.timers$.value].filter((timer) => timer.id !== id));
    this.updateLocalStorage();
  }

  private addTimer(timer: Timer): void {
    this.timers$.next([...this.timers$.value, timer]);
    this.updateLocalStorage();
  }

  updateLocalStorage(): void {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.timers$.value));
  }

  editTimer(id: string, duration: number): void {
    this.timers$.next(
      [...this.timers$.value].map((timer) => {
        if (timer.id !== id) {
          return timer;
        }

        timer.startDate = new Date();
        timer.endDate = new Date(Date.now() + duration);

        return timer;
      })
    );
    this.updateLocalStorage();
  }

  toggleTimerState(id: string) {
    this.timers$.next(
      [...this.timers$.value].map((timer) => {
        if (timer.id !== id) {
          return timer;
        }

        timer.stopped = !timer.stopped;
        if (timer.stopped === false) {
          const remainingTime = timer.endDate.getTime() - timer.stopDate.getTime();
          timer.endDate = new Date(Date.now() + remainingTime);
        } else {
          timer.stopDate = new Date();
        }

        return timer;
      })
    );
    this.updateLocalStorage();
  }

  private parseTimerFromJson(json: TimerJson): Timer {
    return {
      id: json.id,
      startDate: new Date(json.startDate),
      endDate: new Date(json.endDate),
      stopDate: new Date(json.stopDate),
      stopped: json.stopped,
    };
  }
}
