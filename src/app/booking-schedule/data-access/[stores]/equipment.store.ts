import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';
import { logger } from '../../utils';
import { Model } from '../booking.model';
import { BookingService } from '../booking.service';
import { BaseState } from '../interfaces/base-state';

interface State extends BaseState {
  equipments?: Model.Equipment[];
}

function warn<T>(msg: string, data: T) {
  logger(`[Equipment Store] ${msg.toUpperCase()}`, 'warn')(data);
}

@Injectable({ providedIn: 'root' })
export class EquipmentStore extends ComponentStore<State> {
  readonly equipments$ = this.select((s) => s.equipments);
  readonly isLoading$ = this.select((s) => s.progress === 'loading');
  readonly hasLoaded$ = this.select((s) => s.progress === 'loaded');

  fetchList = this.effect<void>((action$) => {
    return action$.pipe(
      tap(() =>
        this.patchState({
          progress: 'loading',
        })
      ),
      switchMap(() => {
        return this.mockApi.getEquipmentList().pipe(
          tap((resp) => {
            this.patchState({
              equipments: resp.data,
              progress: 'loaded',
            });
            warn('fetch list', resp);
          })
        );
      })
    );
  });

  constructor(private mockApi: BookingService) {
    super({});
  }
}
