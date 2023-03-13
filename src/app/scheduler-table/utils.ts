import {
  minutesToHours,
  minutesToMilliseconds,
  minutesToSeconds,
} from 'date-fns';

const browserTimeOffsetInMs = -new Date().getTimezoneOffset();

namespace time {
  export function getBrowserOffsetInMiliseconds(): number {
    return minutesToMilliseconds(browserTimeOffsetInMs);
  }
  export function getBrowserOffsetInSeconds(): number {
    return minutesToSeconds(browserTimeOffsetInMs);
  }
  export function getBrowserOffsetInMinutes(): number {
    return browserTimeOffsetInMs;
  }
  export function getBrowserOffsetInHour(): number {
    return minutesToHours(browserTimeOffsetInMs);
  }
  export function getTotalMilisecondsOffset(
    timezoneOffsetInMs: number
  ): number {
    return timezoneOffsetInMs + getBrowserOffsetInMiliseconds();
  }
  export function getTotalSecondsOffset(
    timezoneOffsetInSeconds: number
  ): number {
    return timezoneOffsetInSeconds - getBrowserOffsetInSeconds();
  }
  export function getTotalMinutesOffset(
    timezoneOffsetInMinutes: number
  ): number {
    return timezoneOffsetInMinutes - getBrowserOffsetInMinutes();
  }
  export function getTotalHoursOffset(timezoneOffsetInHour: number): number {
    return timezoneOffsetInHour - getBrowserOffsetInHour();
  }
}

export default {
  time: time,
};
