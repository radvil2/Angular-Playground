import { Component, ViewEncapsulation } from "@angular/core";
import { TodoSchedulerColTimeCellComponent } from "./col-time-cell/col-time-cell.component";
import { TodoSchedulerHeaderComponent } from "./scheduler-header/scheduler-header.component";

@Component({
  standalone: true,
  selector: "todo-scheduler",
  templateUrl: "./todo-scheduler.component.html",
  styleUrls: ["./todo-scheduler.component.scss"],
  encapsulation: ViewEncapsulation.None,
  imports: [TodoSchedulerHeaderComponent, TodoSchedulerColTimeCellComponent],
})
export class TodoSchedulerComponent { }
