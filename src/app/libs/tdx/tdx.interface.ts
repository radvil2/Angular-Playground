// THINK BIG, START SMALL, AND REVERSE ENGINEER!
// export type TdxTimeUnit = "hour" | "day" | "week" | "month" | "year";

interface TdxCompAbstract<ParamsType = any> {
  init: (params: ParamsType) => void;
  refresh: (params: ParamsType) => void;
}

interface BaseModel {
  id?: string;
  index?: number;
}

interface FuncParams<T = any> extends BaseModel {
  data: T;
}

export interface TdxOptions<HeaderData = any, SlotData = any> {
  headerDefs: TdxHeaderDef<HeaderData>[];
  data: SlotData[];
  cellsGrouping: boolean;
  cellsData: TdxCellDef[];
}

export interface TdxHeaderDef<Data = any> {
  label: string | TdxHeaderLabelFormatterFunc;
  data: Data;
}

export interface TdxCellDef {
  classNames?: string | string[];
  cellRenderer?: TdxCellRendererComp;
  children?: TdxCellDef[];
}

// adapter models
export type TdxCellRendererComp = TdxCompAbstract<TdxCellRendererParams>;
export type TdxColRendererComp = TdxCompAbstract<TdxColRendererParams>;
export type TdxHeaderLabelFormatterFunc<T = any> = (
  def: TdxHeaderDef<T>
) => string;

export type TdxColRendererParams = FuncParams<{ headerDef: TdxHeaderDef }>;
export type TdxCellRendererParams = FuncParams<{
  headerDef: TdxHeaderDef;
  parent?: TdxCellRendererParams;
}>;
