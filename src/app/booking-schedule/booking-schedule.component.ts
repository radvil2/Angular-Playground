import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LetModule, PushModule } from '@ngrx/component';
import { SchedulerTableComponent } from '../scheduler-table';
import { BookingScheduleStore } from './booking-schedule.store';

@Component({
  standalone: true,
  selector: 'app-booking-schedule',
  templateUrl: './booking-schedule.component.html',
  styleUrls: ['./booking-schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BookingScheduleStore],
  imports: [
    RouterModule,
    MatToolbarModule,
    MatCardModule,
    PushModule,
    LetModule,
    NgIf,
    SchedulerTableComponent,
  ],
})
export class BookingScheduleComponent implements OnInit {
  ngOnInit(): void {}
  constructor(readonly store: BookingScheduleStore) {}
}
