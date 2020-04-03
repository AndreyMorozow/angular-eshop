import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { PopupModule } from '../popups/popup.module';
import { NavbarContentComponent } from './component/navbar.component';
import { NavbarComponent } from './container/navbar-container.component';

@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatBadgeModule,
		RouterModule,
		PopupModule
	],
	declarations: [ NavbarComponent, NavbarContentComponent ],
	exports: [ NavbarComponent ]
})

export class NavBarModule {}
