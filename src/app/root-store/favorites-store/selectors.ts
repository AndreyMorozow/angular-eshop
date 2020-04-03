import {
	createFeatureSelector,
	createSelector,
	MemoizedSelector
} from '@ngrx/store';

import { Favorites } from '../../models';

import { featureAdapter, State } from './state';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectFavoritesState: MemoizedSelector<
	object,
	State
> = createFeatureSelector<State>('favorites');

export const selectAllFavoritesItems: (
	state: object
) => Favorites[] = featureAdapter.getSelectors(selectFavoritesState).selectAll;

export const selectFavoritesById = (id: string) =>
createSelector(this.selectAllFavoritesItems, (allFavorites: Favorites[]) => {
	if (allFavorites) {
		return allFavorites.find(p => p.id === id);
	} else {
		return null;
	}
});

export const selectFavoritesError: MemoizedSelector<object, any> = createSelector(
	selectFavoritesState,
	getError
);

export const selectFavoritesIsLoading: MemoizedSelector<
	object,
	boolean
> = createSelector(selectFavoritesState, getIsLoading);
