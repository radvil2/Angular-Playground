import { Component } from "@angular/core";
import { TdxLayoutComponent } from "src/app/libs/tdx";

@Component({
  standalone: true,
  selector: "app-booking-list",
  templateUrl: "./booking-list.component.html",
  styleUrls: ["./booking-list.component.scss"],
  imports: [TdxLayoutComponent],
})
export class BookingListComponent { }
