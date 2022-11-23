import { Pipe, PipeTransform } from '@angular/core';

import { minimum2Digits } from '../util/number-format.util';

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  transform(milliseconds: number): string {
    const seconds = Math.floor(milliseconds / 1000);

    const remainingSeconds = Math.floor(seconds % 60);
    const remainingMinutes = Math.floor((seconds / 60) % 60);
    const remainingHours = Math.floor(seconds / 3600);

    return (
      minimum2Digits(remainingHours) +
      ':' +
      minimum2Digits(remainingMinutes) +
      ':' +
      minimum2Digits(remainingSeconds)
    );
  }
}
