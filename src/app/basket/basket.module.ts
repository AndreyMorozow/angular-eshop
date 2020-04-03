import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '../forms/forms.module';
import { MatCardModule, MatButtonModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { BasketRoutingModule } from './basket-routing.module';
import { BasketListComponent } from './container/basket-list/basket-list.component';
import { BasketCardComponent } from './component/basket-card/basket-card.component';
import { BasketMenuComponent } from './container/basket-menu/basket-menu.component';
import { BasketComponent } from './container/basket/basket.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		SharedModule,
		MatCardModule,
		MatButtonModule,
		BasketRoutingModule
	],
	declarations: [ BasketListComponent, BasketComponent, BasketCardComponent, BasketMenuComponent],
})

export class BasketModule {}
