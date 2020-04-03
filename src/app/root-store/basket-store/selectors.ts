import {
	createFeatureSelector,
	createSelector,
	MemoizedSelector
} from '@ngrx/store';

import { Basket } from '../../models';

import { featureAdapter, State } from './state';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectBasketState: MemoizedSelector<
	object,
	State
> = createFeatureSelector<State>('basket');

export const selectAllBasketItems: (
	state: object
) => Basket[] = featureAdapter.getSelectors(selectBasketState).selectAll;

export const selectBasketById = (id: string) =>
createSelector(this.selectAllBasketItems, (allBasket: Basket[]) => {
	if (allBasket) {
		return allBasket.find(p => p.id === id);
	} else {
		return null;
	}
});

export const selectBasketError: MemoizedSelector<object, any> = createSelector(
	selectBasketState,
	getError
);

export const selectBasketIsLoading: MemoizedSelector<
	object,
	boolean
> = createSelector(selectBasketState, getIsLoading);
