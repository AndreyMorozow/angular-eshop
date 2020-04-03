import { GoodsStoreState } from './goods-store';
import { FavoritesStoreState } from './favorites-store';
import { BasketStoreState } from './basket-store';

export interface State {
	goods: GoodsStoreState.State,
	favorites: FavoritesStoreState.State,
	basket: BasketStoreState.State
}
