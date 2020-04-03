import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
  } from '@ngrx/store';

  import { Goods } from '../../models';

  import { featureAdapter, State } from './state';

  export const getError = (state: State): any => state.error;

  export const getIsLoading = (state: State): boolean => state.isLoading;

  export const selectGoodsState: MemoizedSelector<
    object,
    State
  > = createFeatureSelector<State>('goods');

  export const selectAllGoodsItems: (
    state: object
  ) => Goods[] = featureAdapter.getSelectors(selectGoodsState).selectAll;

  export const selectGoodsById = (id: string) =>
  createSelector(this.selectAllGoodsItems, (allGoods: Goods[]) => {
    if (allGoods) {
      return allGoods.find(p => p.id === id);
    } else {
      return null;
    }
  });

  export const selectGoodsError: MemoizedSelector<object, any> = createSelector(
    selectGoodsState,
    getError
  );

  export const selectGoodsIsLoading: MemoizedSelector<
    object,
    boolean
  > = createSelector(selectGoodsState, getIsLoading);
