import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';
import { logger } from '../../utils';
import { Model } from '../booking.model';
import { BookingService } from '../booking.service';
import { BaseState } from '../interfaces/base-state';

interface State extends BaseState {
  rooms?: Model.Room[];
}

function warn<T>(msg: string, data: T) {
  logger(`[Room Store] ${msg.toUpperCase()}`, 'warn')(data);
}

@Injectable({ providedIn: 'root' })
export class RoomStore extends ComponentStore<State> {
  readonly rooms$ = this.select((s) => s.rooms);
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
        return this.mockApi.getRoomList().pipe(
          tap((resp) => {
            this.patchState({
              rooms: resp.data,
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
