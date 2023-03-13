import { Injectable } from '@angular/core';
import { combineLatest, distinctUntilChanged, map, Observable, of } from 'rxjs';
import { GridOptions } from '../scheduler-table/scheduler.service';
import { BranchStore } from './data-access/[stores]/branch.store';
import { CompanyStore } from './data-access/[stores]/company.store';
import { EquipmentStore } from './data-access/[stores]/equipment.store';
import { MemberTypeStore } from './data-access/[stores]/member-type.store';
import { MemberStore } from './data-access/[stores]/member.store';
import { RoomStore } from './data-access/[stores]/room.store';
import { ServiceStore } from './data-access/[stores]/service.store';
import {
  getBranchTimezoneOffset,
  getWorkingHourDateRange,
} from './utils/branch.utils';

@Injectable()
export class BookingScheduleStore {
  readonly selectedDate$ = of(new Date('2023-03-09')).pipe(
    distinctUntilChanged()
  );

  readonly gridOptions$: Observable<GridOptions> =
    /////////////
    combineLatest([this.branchStore.config$, this.selectedDate$]).pipe(
      map(([branchConfig, selectedDate]) => {
        return <GridOptions>{
          // timeUnit: 'hours',
          timezoneOffset: getBranchTimezoneOffset(
            branchConfig?.Timezone.Offset
          ),
          timeRange: getWorkingHourDateRange(
            selectedDate,
            branchConfig?.WorkingHour
          ),
        };
      })
    );

  #initGlobalData(): void {
    this.companyStore.fetchDetail();
    this.branchStore.fetchDetail();
    this.equipmentStore.fetchList();
    this.memberTypeStore.fetchList();
    this.memberStore.fetchList();
    this.roomStore.fetchList();
    this.serviceStore.fetchList();
  }

  constructor(
    readonly companyStore: CompanyStore,
    readonly branchStore: BranchStore,
    readonly equipmentStore: EquipmentStore,
    readonly memberTypeStore: MemberTypeStore,
    readonly memberStore: MemberStore,
    readonly roomStore: RoomStore,
    readonly serviceStore: ServiceStore
  ) {
    this.#initGlobalData();
  }
}
