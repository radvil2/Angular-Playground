import { Component, ViewEncapsulation } from "@angular/core";
import { TdxColCellComponent } from "../tdx-col-cell/tdx-col-cell.component";

@Component({
  standalone: true,
  selector: "tdx-content-col",
  templateUrl: "tdx-content-col.component.html",
  encapsulation: ViewEncapsulation.None,
  imports: [TdxColCellComponent],
})
export class TdxContentColComponent {}
