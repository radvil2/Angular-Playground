import { Component, ViewEncapsulation } from "@angular/core";
import { TdxContentColComponent } from "./tdx-content-col/tdx-content-col.component";
import { TdxLayoutHeaderComponent } from "./tdx-layout-header/tdx-layout-header.component";

@Component({
  standalone: true,
  selector: "todo-scheduler",
  templateUrl: "./tdx-layout.component.html",
  styleUrls: ["./tdx-layout.component.scss"],
  encapsulation: ViewEncapsulation.None,
  imports: [TdxLayoutHeaderComponent, TdxContentColComponent],
})
export class TdxLayoutComponent { }
