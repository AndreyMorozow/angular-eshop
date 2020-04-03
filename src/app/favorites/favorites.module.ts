import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

import { FavoritesRoutingModule } from './favorites-routins.module';
import { FavoritesListComponent } from './container/favorites-list/favorites-list.component';
import { FavoritesCardComponent } from './component/favorites-card/favorites-card.component';
import { FavoritesComponent } from './container/favorites/favorites.component';

@NgModule({
  imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		SharedModule,
		FavoritesRoutingModule
  ],
  declarations: [ FavoritesListComponent, FavoritesComponent, FavoritesCardComponent ],
})

export class FavoritesModule {}
