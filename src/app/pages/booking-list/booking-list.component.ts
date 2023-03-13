import { Component } from '@angular/core';
import { TodoSchedulerComponent } from 'src/app/libs/todo-scheduler';

@Component({
  standalone: true,
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
  imports: [TodoSchedulerComponent],
})
export class BookingListComponent {}
