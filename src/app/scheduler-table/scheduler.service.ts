import { Injectable } from '@angular/core';
import { hoursToMilliseconds } from 'date-fns';
import { number, z } from 'zod';

export type TimeUnit = 'hour' | 'minutes' | 'seconds' | 'miliseconds';

namespace validate {
  export function string(value: ValidType | undefined) {
    switch (typeof value) {
      case 'string':
        return value;
      case 'number':
        return `${value}`;
      case 'function':
        return `${value()}`;
      default:
        throw `validation failed for ${value}. Type should be a string, function, or number`;
    }
  }
  export function number(value: ValidType | undefined) {
    switch (typeof value) {
      case 'string':
        return Number(value);
      case 'number':
        return value;
      case 'function':
        return Number(value());
      default:
        throw `validation failed for ${value}. Type should be a string, function, or number`;
    }
  }
}

class AbstractColDef {
  #index: number;
  get index() {
    return this.#index;
  }
  constructor(index?: ValidType) {
    this.#index = validate.number(index);
  }
}

type ValidType = string | Function | number;

export interface TimeRange {
  start: number;
  end: number;
}

interface ColDefParams<Data> {
  readonly index?: ValidType;
  readonly id?: ValidType;
  headerName?: ValidType;
  data: Data | null;
  availableRanges: TimeRange[] | ((data: Data) => TimeRange[]);
  hide: boolean | Function;
  classNames?: string[] | string | Function;
  headerClassNames?: string[] | string | Function;
}

class ColDef<Model = object>
  extends AbstractColDef
  implements ColDefParams<Model>
{
  readonly id: ValidType;
  headerName: ValidType;
  availableRanges: TimeRange[] = [];
  data: Model | null;
  hide = false;
  classNames = '';
  headerClassNames = '';
  constructor(props: ColDefParams<Model>) {
    super(props.index);
    this.id = validate.string(props.id);
    this.headerName = validate.string(props.headerName);
    this.data = props.data;
    if (typeof props.availableRanges === 'function') {
      if (props.data) {
        this.availableRanges = props.availableRanges(props.data);
      }
    }
    if (typeof props.hide === 'boolean') {
      this.hide = props.hide;
    } else if (typeof props.hide === 'function') {
      this.hide = props.hide();
    }
    // classNames
    if (typeof props.classNames === 'string') {
      this.classNames = props.classNames;
    } else if (typeof props.classNames === 'function') {
      this.classNames = props.classNames();
    } else if (Array.isArray(props.classNames)) {
      this.classNames = props.classNames.join(' ');
    }
    // header classNames
    if (typeof props.classNames === 'string') {
      this.classNames = props.classNames;
    } else if (typeof props.classNames === 'function') {
      this.classNames = props.classNames();
    } else if (Array.isArray(props.classNames)) {
      this.classNames = props.classNames.join(' ');
    }
  }
}

interface SlotComponent {
  init: (params: SlotParams) => void;
  refresh: (params: SlotParams) => void;
}

type SlotRenderer = SlotComponent | Function;

interface SlotParams<T = object> {
  id?: ValidType;
  startTime?: number | Function;
  duration?: number | Function;
  data: T;
  colDef: ColDef;
  slotRenderer: (param: SlotParams) => SlotRenderer;
}

export interface GridOptions {
  // @desc default locale fallbacks to "en-US"
  locale: string;
  // @desc locale offset in hour, default to browser tz offset
  timezoneOffset: number;
  // @desc duration per cell height
  cellDuration: number;
  // @desc cell duration unit
  cellDurationUnit: TimeUnit;
  // @desc cell height in 'px' unit
  cellHeightPerDuration: number;
  // @desc ---
  timeRange: TimeRange;
}

export type GridReadyEvent<T = object> = {
  api: any;
  gridOptions: GridOptions;
  data: T[];
};
// type GridReadyEvent = State; // coldefs, gridOptions, slots, timeRange, etc

const INITIAL_GRID_OPTIONS = {
  cellDuration: 5,
  cellDurationUnit: 'minutes',
  cellHeightPerDuration: 4,
  timeRange: {
    start: Date.now(),
    end: Date.now() + hoursToMilliseconds(24), // 24 hours
  },
};

namespace u {
  function isNot(value: unknown, typeName: string): Error {
    return new Error(`\`${value}\` is not a ${typeName}`);
  }

  export function isNumber(value: unknown): asserts value is number {
    if (typeof value !== 'undefined' && typeof value !== 'number') {
      throw isNot(value, 'number');
    }
  }

  export function isTimeUnit(value: unknown): asserts value is TimeUnit {
    const units = ['hour', 'minutes', 'seconds', 'miliseconds'];
    if (typeof value !== 'undefined' && typeof value !== 'string') {
      throw isNot(value, 'TimeUnit');
    } else if (typeof value === 'string' && !units.includes(value)) {
      throw isNot(value, 'TimeUnit');
    }
  }
}

namespace parser {
  export function number(value: unknown) {
    u.isNumber(value);
    return value;
  }

  export function timeUnit(value: unknown) {
    u.isTimeUnit(value);
    return value;
  }
}

@Injectable()
export class SchedulerService {
  gridOptions = INITIAL_GRID_OPTIONS;

  copyPropsToGridOptions(o: Partial<GridOptions>) {
    this.gridOptions.cellDuration = parser.number(o.cellDuration);
    this.gridOptions.cellDurationUnit = parser.timeUnit(o.cellDurationUnit);
  }
}
