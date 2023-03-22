export type TimeCellUnit = "minutes" | "hour" | "day" | "week" | "month";

export interface TimeCellGroupDef<HeaderData = any> {
  id: string;
  index: number;
  startTime: Date;
  data: HeaderData;
  cellType: TimeCellUnit;
  cellDuration: number;
  cellCounts: number;
}

export interface TimeCellParams<HeaderData = any> {
  id: string;
  index: number;
  startTime: Date;
  duration: number;
  labelFormatter: (self: TimeCellParams) => string;
  getGroupDef: () => TimeCellGroupDef<HeaderData>;
}
