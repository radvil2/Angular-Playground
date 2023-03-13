import { Directive, HostBinding, Input } from '@angular/core';
import { ColumnDef, RowDef } from './scheduler-table';

function isWorkingHour(row: RowDef, col?: ColumnDef): boolean {
  const cellTimeInMs = row?.time || 0;
  const ranges = col?.timeRanges;
  if (Array.isArray(ranges)) {
    return ranges.some((range) => {
      return cellTimeInMs >= range.start && cellTimeInMs < range.end;
    });
  } else if (typeof ranges === 'function') {
    return ranges();
  } else {
    return false;
  }
}

// TODO: later set all condition cell's style by category here instead

@Directive({
  selector: '[scheduler-table-cell]',
})
export class SchedulerTableDirective {
  #cellHeight!: string | number;

  @Input()
  rowDef!: RowDef;

  @Input()
  colDef!: ColumnDef;

  @HostBinding('class.active')
  get isActiveCell(): boolean {
    if (!this.rowDef || !this.colDef) return false;
    return isWorkingHour(this.rowDef, this.colDef);
  }

  @Input()
  @HostBinding('style.height')
  set cellHeight(value: string | number) {
    if (value == null) return;
    this.#cellHeight = `${value}px`;
  }

  get cellHeight() {
    return this.#cellHeight;
  }
}
