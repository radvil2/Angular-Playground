import { Component, ViewEncapsulation } from "@angular/core";
import { TimeCellComponent } from "./time-cell/time-cell.component";
import { TodoSchedulerHeaderComponent } from "./todo-scheduler-header.component";

@Component({
  standalone: true,
  selector: "todo-scheduler",
  templateUrl: "./todo-scheduler.component.html",
  styleUrls: ["./todo-scheduler.component.scss"],
  encapsulation: ViewEncapsulation.None,
  imports: [TodoSchedulerHeaderComponent, TimeCellComponent],
})
export class TodoSchedulerComponent {}
