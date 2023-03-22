import { NgClass, NgFor, NgIf, NgTemplateOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from "@angular/core";
import { ITimeCellParams } from "./col-dell.interface";

@Component({
  standalone: true,
  selector: "tdx-col-cell",
  templateUrl: "tdx-col-cell.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, NgClass, NgTemplateOutlet, NgIf],
})
export class TdxColCellComponent {
  @Input()
  cellDef!: ITimeCellParams<any>;

  get label(): string {
    return this.cellDef.labelFormatter(this.cellDef)
  }

  @Output()
  cellClick = new EventEmitter<any>();
}
