import {
  hoursToMilliseconds,
  hoursToMinutes,
  hoursToSeconds,
  minutesToHours,
  minutesToMilliseconds,
  minutesToSeconds,
} from 'date-fns';
import { TimeRange, TimeUnit } from 'src/app/scheduler-table/scheduler.service';
import { Config } from '../data-access/booking.model';

export function getBrowserTimezone(unit: TimeUnit = 'miliseconds') {
  const minutesOffset = new Date().getTimezoneOffset();
  switch (unit) {
    case 'miliseconds':
      return minutesToMilliseconds(minutesOffset);
    case 'seconds':
      return minutesToSeconds(minutesOffset);
    case 'hour':
      return minutesToHours(minutesOffset);
    case 'minutes':
      return minutesOffset;
    default:
      throw 'time unit is not supported!';
  }
}

export function getBranchTimezoneOffset(
  hourOffset: number | undefined,
  unit: TimeUnit = 'hour'
) {
  hourOffset = hourOffset === undefined ? getBrowserTimezone(unit) : hourOffset;
  switch (unit) {
    case 'miliseconds':
      return hoursToMilliseconds(hourOffset);
    case 'seconds':
      return hoursToSeconds(hourOffset);
    case 'minutes':
      return hoursToMinutes(hourOffset);
    case 'hour':
      return hourOffset;
    default:
      throw 'time unit is not supported!';
  }
}

const workingHours: Array<keyof Config.Branch['WorkingHour']> = [
  'SundayHours',
  'MondayHours',
  'TuesdayHours',
  'WednesdayHours',
  'ThursdayHours',
  'FridayHours',
  'SaturdayHours',
];

export function getWorkingHourKey(
  dayIndex: number
): keyof Config.Branch['WorkingHour'] {
  return workingHours[dayIndex];
}

export function getWorkingHourDateRange(
  date: Date,
  entries: Config.Branch['WorkingHour'] | undefined
): TimeRange | undefined {
  const dayIndex = date.getDay();
  const key = getWorkingHourKey(dayIndex);
  if (!entries || !entries[key]) return undefined;
  const workingHours = entries[key];
  const startHour = workingHours[0].From;
  const endHour = workingHours[workingHours.length - 1].To;
  const startDateInMs = date.setHours(startHour, 0, 0, 0);
  const endDateInMs = date.setHours(endHour, 0, 0, 0);
  return {
    start: startDateInMs,
    end: endDateInMs,
  };
}
