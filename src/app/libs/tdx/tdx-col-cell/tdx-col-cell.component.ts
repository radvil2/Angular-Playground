import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  standalone: true,
  selector: "tdx-col-cell",
  templateUrl: "tdx-col-cell.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class TdxColCellComponent {
  @Input()
  label = "6:00 AM";
}
