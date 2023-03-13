import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';
import { logger } from '../../utils';
import { Model } from '../booking.model';
import { BookingService } from '../booking.service';
import { BaseState } from '../interfaces/base-state';

interface State extends BaseState {
  services?: Model.Service[];
}

function warn<T>(msg: string, data: T) {
  logger(`[Service Store] ${msg.toUpperCase()}`, 'warn')(data);
}

@Injectable({ providedIn: 'root' })
export class ServiceStore extends ComponentStore<State> {
  readonly branch$ = this.select((s) => s.services);
  readonly isLoading$ = this.select((s) => s.progress === 'loading');
  readonly hasLoaded$ = this.select((s) => s.progress === 'loaded');

  readonly fetchList = this.effect<void>((action$) => {
    return action$.pipe(
      tap(() =>
        this.patchState({
          progress: 'loading',
        })
      ),
      switchMap(() => {
        return this.mockApi.getServiceList({ active: true }).pipe(
          tap((resp) => {
            this.patchState({
              services: resp.data,
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
