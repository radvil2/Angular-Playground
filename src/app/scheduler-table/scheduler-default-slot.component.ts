import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { millisecondsToMinutes } from 'date-fns';

@Component({
  standalone: true,
  selector: 'app-scheduler-default-slot',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  styles: [
    `
      :host {
        background-color: gold;
        border: 1px solid red;
      }
    `,
  ],
  template: `
    <p>No custom slot provided!</p>
    <p>
      <strong>Slot Id: {{ slotId }}</strong> <br />
      <strong>AssignedColumn: {{ columnDef.headerName }}</strong> <br />
      <strong>Total Duration: {{ durationInMinute }} minutes</strong>
    </p>
    <pre>{{ data | json }}</pre>
  `,
})
export class ScheduleDefaultSlotComponent {
  @Input()
  slotId!: string;

  @Input()
  columnDef!: any;

  @Input()
  startTime = 0;

  @Input()
  duration = 0;

  get durationInMinute(): number {
    return millisecondsToMinutes(this.duration);
  }

  @Input()
  endTime = 0;

  @Input()
  data!: any;
}
