import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule } from '@angular/material';

import { GoodsRoutingModule } from './goods-routing.module';
import { GoodsListComponent } from './container/goods-list/goods-list.component';
import { GoodsCardComponent } from './component/goods-card/goods-card.component';
import { GoodsComponent } from './container/goods/goods.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		SharedModule,
		GoodsRoutingModule
	],
	declarations: [ GoodsListComponent, GoodsComponent, GoodsCardComponent ],
})

export class GoodsModule {}
