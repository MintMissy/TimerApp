export function getRandomUid(): string {
  return Math.floor(Math.random() * Date.now()) + '';
}
