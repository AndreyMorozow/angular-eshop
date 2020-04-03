import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { FirebaseService } from '../../services/firebase.service';
import * as featureActions from './actions';

@Injectable()
export class FavoritesStoreEffects {
  constructor(private fireBaseService: FirebaseService, private actions$: Actions) {}

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST
    ),
    startWith(new featureActions.LoadRequestAction()),
    switchMap(action =>
      this.fireBaseService
        .getFavorites()
        .pipe(
          map(
            items =>
              new featureActions.LoadSuccessAction({
                items
              })
            ),
            catchError(error =>
              observableOf(new featureActions.LoadFailureAction({ error }))
            )
      	)
     )
  );
}
