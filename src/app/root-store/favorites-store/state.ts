import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Favorites } from '../../models';

export const featureAdapter: EntityAdapter<
Favorites
> = createEntityAdapter<Favorites>({
  selectId: model => model.id,
  sortComparer: (a: Favorites, b: Favorites): number =>
    b.id.toString().localeCompare(a.id)
});

export interface State extends EntityState<Favorites> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);
