import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
    GoodsStoreSelectors
} from './goods-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
    GoodsStoreSelectors.selectGoodsError,
  (goodsError: string) => {
    return goodsError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
    GoodsStoreSelectors.selectGoodsIsLoading,
  (goods: boolean) => {
    return goods;
  }
);


