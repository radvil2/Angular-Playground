import { ComponentStore } from '@ngrx/component-store';

export type StateProgress =
  | 'loading'
  | 'loaded'
  | 'submitting'
  | 'submitted'
  | 'updating'
  | 'updated'
  | 'deleting'
  | 'deleted'
  | 'error';

export type StateError = Error | null | undefined;

export interface BaseState {
  progress?: StateProgress;
  error?: StateError;
}
