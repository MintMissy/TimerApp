import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  transform(milliseconds: number): string {
    const seconds = milliseconds / 1000;

    const remainingSeconds = Math.floor(seconds % 60);
    const remainingMinutes = Math.floor(seconds % 3600);
    const remainingHours = Math.floor(seconds / 3600);
    
    return remainingHours + ':' + remainingMinutes + ':' + remainingSeconds;
  }
}
