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

export interface TdxOptions<HeaderData = any, SlotData = any> {
  headerDefs: TdxHeaderDef<HeaderData>[];
  data: SlotData[];
  cellsGrouping: boolean;
  cellsData: TdxCellDef[];
}

export interface TdxHeaderDef<Data = any> extends BaseModel {
  label: string | TdxHeaderLabelFormatterFunc;
  data: Data;
}

export interface TdxCellDef extends BaseModel {
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

export interface TdxColRendererParams extends BaseModel {
  headerDef: TdxHeaderDef;
}
export interface TdxCellRendererParams extends BaseModel {
  headerDef: TdxHeaderDef;
  parent?: TdxCellRendererParams;
}
