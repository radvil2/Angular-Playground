import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { logger } from '../../utils';
import { Model } from '../booking.model';
import { BookingService } from '../booking.service';
import { BaseState } from '../interfaces/base-state';

interface State extends BaseState {
  branch?: Model.Branch;
}

function warn<T>(msg: string, data: T) {
  logger(`[Branch Store] ${msg.toUpperCase()}`, 'warn')(data);
}

@Injectable({ providedIn: 'root' })
export class BranchStore extends ComponentStore<State> {
  readonly branch$ = this.select((s) => s.branch);
  readonly isLoading$ = this.select((s) => s.progress === 'loading');
  readonly hasLoaded$ = this.select((s) => s.progress === 'loaded');

  readonly config$ = this.branch$.pipe(
    map((branch) => branch?.Configuration),
    distinctUntilChanged()
  );

  fetchDetail = this.effect<void>((action$) => {
    return action$.pipe(
      tap(() =>
        this.patchState({
          progress: 'loading',
        })
      ),
      switchMap(() => {
        return this.mockApi.getBranchDetail().pipe(
          tap((resp) => {
            this.patchState({
              branch: resp.data,
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
