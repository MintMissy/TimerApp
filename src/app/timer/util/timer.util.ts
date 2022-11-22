import { Timer } from '../model/timer.model';

function getTimerSeconds(timer: Timer): number {
  return (timer.endDate.getTime() - timer.startDate.getTime()) / 1000;
}

export function getRemainingSecondsFromTimer(timer: Timer): number {
  return getTimerSeconds(timer) % 60;
}

export function getRemainingMinutesFromTimer(timer: Timer): number {
  return (getTimerSeconds(timer) / 60) % 60;
}

export function getRemainingHoursFromTimer(timer: Timer): number {
  return Math.floor(getTimerSeconds(timer) / 3600);
}
