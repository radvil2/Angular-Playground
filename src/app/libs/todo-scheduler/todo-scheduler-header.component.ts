import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'todo-scheduler-header',
  styleUrls: ['./todo-scheduler-header.component.scss'],
  templateUrl: 'todo-scheduler-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoSchedulerHeaderComponent { }
