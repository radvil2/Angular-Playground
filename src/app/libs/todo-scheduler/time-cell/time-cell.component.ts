import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  standalone: true,
  selector: "todo-scheduler-time-cell",
  templateUrl: "time-cell.component.html",
  styleUrls: ["./time-cell.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class TimeCellComponent {
  @Input()
  label = "6:00 AM"
}
