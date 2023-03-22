import { NgFor, NgIf } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from "@angular/core";
import {
  ITimeCellParams,
  ITimeCellGroupParams,
} from "../tdx-col-cell/col-dell.interface";
import { TdxColCellComponent } from "../tdx-col-cell/tdx-col-cell.component";

const cellDuration = (1 * 60 * 60 * 1_000) / 4;

const groups: ITimeCellGroupParams[] = [
  {
    id: "group-0",
    index: 0,
    data: { test: "test" },
    unitType: "hour",
    duration: 1 * 60 * 60 * 1_000,
    startTime: new Date(),
    unitDuration: cellDuration,
    cellDefs: [
      {
        id: "cell-0",
        index: 0,
        startTime: new Date(),
        duration: cellDuration,
        labelFormatter: (def: ITimeCellParams) => {
          return def.getGroupDef().id;
        },
        getGroupDef() {
          return <ITimeCellGroupParams>{
            id: "group-0",
            index: 0,
            data: { test: "test" },
            unitType: "hour",
            duration: 1 * 60 * 60 * 1_000,
            startTime: new Date(),
            unitDuration: cellDuration,
          };
        },
      },
      {
        id: "cell-0",
        index: 0,
        startTime: new Date(),
        duration: cellDuration,
        labelFormatter: (def: ITimeCellParams) => {
          return def.getGroupDef().id;
        },
        getGroupDef() {
          return <ITimeCellGroupParams>{
            id: "group-0",
            index: 0,
            data: { test: "test" },
            unitType: "hour",
            duration: 1 * 60 * 60 * 1_000,
            startTime: new Date(),
            unitDuration: cellDuration,
          };
        },
      },
      {
        id: "cell-0",
        index: 0,
        startTime: new Date(),
        duration: cellDuration,
        labelFormatter: (def: ITimeCellParams) => {
          return def.getGroupDef().id;
        },
        getGroupDef() {
          return <ITimeCellGroupParams>{
            id: "group-0",
            index: 0,
            data: { test: "test" },
            unitType: "hour",
            duration: 1 * 60 * 60 * 1_000,
            startTime: new Date(),
            unitDuration: cellDuration,
          };
        },
      },
      {
        id: "cell-0",
        index: 0,
        startTime: new Date(),
        duration: cellDuration,
        labelFormatter: (def: ITimeCellParams) => {
          return def.getGroupDef().id;
        },
        getGroupDef() {
          return <ITimeCellGroupParams>{
            id: "group-0",
            index: 0,
            data: { test: "test" },
            unitType: "hour",
            duration: 1 * 60 * 60 * 1_000,
            startTime: new Date(),
            unitDuration: cellDuration,
          };
        },
      },
    ],
  },
  {
    id: "group-1",
    index: 0,
    data: { test: "test" },
    unitType: "hour",
    duration: 1 * 60 * 60 * 1_000,
    startTime: new Date(),
    unitDuration: cellDuration,
    cellDefs: [
      {
        id: "cell-0",
        index: 0,
        startTime: new Date(),
        duration: cellDuration,
        labelFormatter: (def: ITimeCellParams) => {
          return def.getGroupDef().id;
        },
        getGroupDef() {
          return <ITimeCellGroupParams>{
            id: "group-0",
            index: 0,
            data: { test: "test" },
            unitType: "hour",
            duration: 1 * 60 * 60 * 1_000,
            startTime: new Date(),
            unitDuration: cellDuration,
          };
        },
      },
      {
        id: "cell-0",
        index: 0,
        startTime: new Date(),
        duration: cellDuration,
        labelFormatter: (def: ITimeCellParams) => {
          return def.getGroupDef().id;
        },
        getGroupDef() {
          return <ITimeCellGroupParams>{
            id: "group-0",
            index: 0,
            data: { test: "test" },
            unitType: "hour",
            duration: 1 * 60 * 60 * 1_000,
            startTime: new Date(),
            unitDuration: cellDuration,
          };
        },
      },
      {
        id: "cell-0",
        index: 0,
        startTime: new Date(),
        duration: cellDuration,
        labelFormatter: (def: ITimeCellParams) => {
          return def.getGroupDef().id;
        },
        getGroupDef() {
          return <ITimeCellGroupParams>{
            id: "group-0",
            index: 0,
            data: { test: "test" },
            unitType: "hour",
            duration: 1 * 60 * 60 * 1_000,
            startTime: new Date(),
            unitDuration: cellDuration,
          };
        },
      },
      {
        id: "cell-0",
        index: 0,
        startTime: new Date(),
        duration: cellDuration,
        labelFormatter: (def: ITimeCellParams) => {
          return def.getGroupDef().id;
        },
        getGroupDef() {
          return <ITimeCellGroupParams>{
            id: "group-0",
            index: 0,
            data: { test: "test" },
            unitType: "hour",
            duration: 1 * 60 * 60 * 1_000,
            startTime: new Date(),
            unitDuration: cellDuration,
          };
        },
      },
    ],
  },
  {
    id: "group-2",
    index: 0,
    data: { test: "test" },
    unitType: "hour",
    duration: 1 * 60 * 60 * 1_000,
    startTime: new Date(),
    unitDuration: cellDuration,
    cellDefs: [
      {
        id: "cell-0",
        index: 0,
        startTime: new Date(),
        duration: cellDuration,
        labelFormatter: (def: ITimeCellParams) => {
          return def.getGroupDef().id;
        },
        getGroupDef() {
          return <ITimeCellGroupParams>{
            id: "group-0",
            index: 0,
            data: { test: "test" },
            unitType: "hour",
            duration: 1 * 60 * 60 * 1_000,
            startTime: new Date(),
            unitDuration: cellDuration,
          };
        },
      },
      {
        id: "cell-0",
        index: 0,
        startTime: new Date(),
        duration: cellDuration,
        labelFormatter: (def: ITimeCellParams) => {
          return def.getGroupDef().id;
        },
        getGroupDef() {
          return <ITimeCellGroupParams>{
            id: "group-0",
            index: 0,
            data: { test: "test" },
            unitType: "hour",
            duration: 1 * 60 * 60 * 1_000,
            startTime: new Date(),
            unitDuration: cellDuration,
          };
        },
      },
      {
        id: "cell-0",
        index: 0,
        startTime: new Date(),
        duration: cellDuration,
        labelFormatter: (def: ITimeCellParams) => {
          return def.getGroupDef().id;
        },
        getGroupDef() {
          return <ITimeCellGroupParams>{
            id: "group-0",
            index: 0,
            data: { test: "test" },
            unitType: "hour",
            duration: 1 * 60 * 60 * 1_000,
            startTime: new Date(),
            unitDuration: cellDuration,
          };
        },
      },
      {
        id: "cell-0",
        index: 0,
        startTime: new Date(),
        duration: cellDuration,
        labelFormatter: (def: ITimeCellParams) => {
          return def.getGroupDef().id;
        },
        getGroupDef() {
          return <ITimeCellGroupParams>{
            id: "group-0",
            index: 0,
            data: { test: "test" },
            unitType: "hour",
            duration: 1 * 60 * 60 * 1_000,
            startTime: new Date(),
            unitDuration: cellDuration,
          };
        },
      },
    ],
  },
];

@Component({
  standalone: true,
  selector: "tdx-content-col",
  templateUrl: "tdx-content-col.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, NgFor, TdxColCellComponent],
})
export class TdxContentColComponent {
  @Input()
  groups = groups;
}
