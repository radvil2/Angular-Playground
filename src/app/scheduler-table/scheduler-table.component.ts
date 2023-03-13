import {
  JsonPipe,
  NgFor,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { LetModule, PushModule } from '@ngrx/component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { GridOptions, SchedulerService } from './scheduler.service';

@Component({
  standalone: true,
  selector: 'app-scheduler-table',
  templateUrl: './scheduler-table.component.html',
  styleUrls: ['./scheduler-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SchedulerService],
  imports: [
    NgFor,
    NgStyle,
    NgIf,
    JsonPipe,
    NgTemplateOutlet,
    NgxSkeletonLoaderModule,
    PushModule,
    LetModule,
  ],
})
export class SchedulerTableComponent implements OnInit {
  @Input()
  isLoading = false;

  @Input()
  gridOptions: Partial<GridOptions> = {};

  @Input()
  data: any[] = [];

  ngOnInit(): void {}

  constructor(readonly store: SchedulerService) {}
}
