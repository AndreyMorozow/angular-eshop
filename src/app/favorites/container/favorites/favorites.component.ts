import { Component, OnInit } from '@angular/core';
import { Favorites } from '../../../models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  RootStoreState,
  FavoritesStoreActions,
  FavoritesStoreSelectors
} from '../../../root-store';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
	favorites$: Observable<Favorites[]>;
  error$: Observable<any>;
	isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
		this.favorites$ = this.store$.select(
      FavoritesStoreSelectors.selectAllFavoritesItems
    );

    this.error$ = this.store$.select(
      FavoritesStoreSelectors.selectFavoritesError
    );

    this.isLoading$ = this.store$.select(
      FavoritesStoreSelectors.selectFavoritesIsLoading
    );

    this.store$.dispatch(
      new FavoritesStoreActions.LoadRequestAction()
    );

  }

}
