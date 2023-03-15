import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "tdx-layout-header",
  templateUrl: "tdx-layout-header.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdxLayoutHeaderComponent { }
