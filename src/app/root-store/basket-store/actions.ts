import { Action } from '@ngrx/store';
import { Basket } from '../../models';

export enum ActionTypes {
  LOAD_REQUEST = '[Basket] Load Request',
  LOAD_FAILURE = '[Basket] Load Failure',
  LOAD_SUCCESS = '[Basket] Load Success'
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
  constructor(public payload: { items: Basket[] }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
