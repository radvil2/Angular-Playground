import { NgClass, NgFor, NgIf, NgTemplateOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from "@angular/core";

interface SampleModel {
  id: string;
  startDate: Date;
  endDate: Date;
}

type LabelFormatterFunc = (params: ICellRendererParams) => string;

interface ICellRendererParams<T = any> {
  id: string;
  index: number;
  data?: T;
  label?: LabelFormatterFunc;
  children?: ICellRendererParams<T>[];
}

interface ICellRendererComp<T = any> {
  init: (params: ICellRendererParams<T>) => void;
  refresh: (params: ICellRendererParams<T>) => boolean;
}

const getTimeLabel: LabelFormatterFunc = (
  _: ICellRendererParams<SampleModel>
) => {
  return "Test";
};

@Component({
  standalone: true,
  selector: "tdx-col-cell",
  templateUrl: "tdx-col-cell.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, NgClass, NgTemplateOutlet, NgIf],
})
export class TdxColCellComponent implements ICellRendererComp<SampleModel> {
  params!: ICellRendererParams<SampleModel>;

  get hasChildren(): boolean {
    return !!this.params.children?.length;
  }

  init(params: ICellRendererParams<SampleModel>): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams<SampleModel>): boolean {
    this.init(params);
    return false;
  }

  ngOnInit(): void {
    this.init({
      index: 0,
      id: "Group 1",
      children: [
        {
          index: 0,
          id: "child-0",
          label: getTimeLabel,
          data: {
            id: String(Date.now()),
            startDate: new Date(),
            endDate: new Date(),
          },
        },
        {
          index: 1,
          id: "child-1",
          label: getTimeLabel,
        },
        {
          index: 2,
          id: "child-2",
          label: getTimeLabel,
        },
        {
          index: 3,
          id: "child-3",
          label: getTimeLabel,
        },
      ],
    });
  }
}
