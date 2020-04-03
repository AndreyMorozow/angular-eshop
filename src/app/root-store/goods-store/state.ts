import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Goods } from '../../models';

export const featureAdapter: EntityAdapter<
Goods
> = createEntityAdapter<Goods>({
  selectId: model => model.id,
  sortComparer: (a: Goods, b: Goods): number =>
    b.id.toString().localeCompare(a.id)
});

export interface State extends EntityState<Goods> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);