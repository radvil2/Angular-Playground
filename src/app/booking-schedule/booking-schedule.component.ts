import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SchedulerTableComponent } from '../scheduler-table';

@Component({
  standalone: true,
  selector: 'app-booking-schedule',
  templateUrl: './booking-schedule.component.html',
  styleUrls: ['./booking-schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, MatToolbarModule, SchedulerTableComponent],
})
export class BookingScheduleComponent { }
