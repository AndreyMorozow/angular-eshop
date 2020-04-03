import { Action } from '@ngrx/store';
import { Favorites } from '../../models';

export enum ActionTypes {
  LOAD_REQUEST = '[Favorites] Load Request',
  LOAD_FAILURE = '[Favorites] Load Failure',
  LOAD_SUCCESS = '[Favorites] Load Success'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: Favorites[] }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
