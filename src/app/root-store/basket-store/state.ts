import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Basket } from '../../models';

export const featureAdapter: EntityAdapter<
Basket
> = createEntityAdapter<Basket>({
  selectId: model => model.id,
  sortComparer: (a: Basket, b: Basket): number =>
    b.id.toString().localeCompare(a.id)
});

export interface State extends EntityState<Basket> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);
