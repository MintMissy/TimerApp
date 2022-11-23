export function minimum2Digits(number: number): string {
  return number <= 9 ? `0${number}` : number + '';
}
