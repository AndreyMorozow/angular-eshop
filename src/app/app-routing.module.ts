import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'goods',
		loadChildren: () => import('./goods/goods.module').then(m => m.GoodsModule)
	},
	{ path: 'favorites',
		loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule)
	},
	{ path: 'basket',
		loadChildren: () => import('./basket/basket.module').then(m => m.BasketModule)
	},
	{ path: '**', redirectTo: 'goods'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
