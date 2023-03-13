import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';
import { logger } from '../../utils';
import { Model } from '../booking.model';
import { BookingService } from '../booking.service';
import { BaseState } from '../interfaces/base-state';

interface State extends BaseState {
  company?: Model.Company;
}

function warn<T>(msg: string, data: T) {
  logger(`[Company Store] ${msg.toUpperCase()}`, 'warn')(data);
}

@Injectable({ providedIn: 'root' })
export class CompanyStore extends ComponentStore<State> {
  readonly company$ = this.select((s) => s.company);
  readonly isLoading$ = this.select((s) => s.progress === 'loading');
  readonly hasLoaded$ = this.select((s) => s.progress === 'loaded');

  readonly fetchDetail = this.effect<void>((action$) => {
    return action$.pipe(
      tap(() =>
        this.patchState({
          progress: 'loading',
        })
      ),
      switchMap(() => {
        return this.mockApi.getCompanyDetail().pipe(
          tap((resp) => {
            this.patchState({
              company: resp.data,
              progress: 'loaded',
            });
            warn('fetch detail', resp);
          })
        );
      })
    );
  });

  constructor(private mockApi: BookingService) {
    super({});
  }
}
