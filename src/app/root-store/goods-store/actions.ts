import { Action } from '@ngrx/store';
import { Goods } from '../../models';

export enum ActionTypes {
  LOAD_REQUEST = '[Goods] Load Request',
  LOAD_FAILURE = '[Goods] Load Failure',
  LOAD_SUCCESS = '[Goods] Load Success'
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
  constructor(public payload: { items: Goods[] }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
