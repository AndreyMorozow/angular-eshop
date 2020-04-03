import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { GoodsStoreModule } from './goods-store/goods-store.module';
import { BasketStoreModule } from './basket-store/basket-store.module';
import { FavoritesStoreModule } from './favorites-store/favorites-store.module';

@NgModule({
	imports: [
		CommonModule,
		GoodsStoreModule,
		BasketStoreModule,
		FavoritesStoreModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({
			maxAge: 30, // Retains last 25 states
		}),
	],
	declarations: []
})
export class RootStoreModule {}
