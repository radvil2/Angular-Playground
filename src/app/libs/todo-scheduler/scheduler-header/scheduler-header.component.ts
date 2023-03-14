import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "todo-scheduler-header",
  templateUrl: "scheduler-header.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoSchedulerHeaderComponent { }
