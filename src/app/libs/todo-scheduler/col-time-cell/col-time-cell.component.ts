import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  standalone: true,
  selector: "todo-scheduler-col-time-cell",
  templateUrl: "col-time-cell.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class TodoSchedulerColTimeCellComponent {
  @Input()
  label = "6:00 AM";
}
