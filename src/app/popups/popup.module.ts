import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { PopupWithListComponent } from './popup-with-list/popup-with-list.component';
import { PopupWithTextComponent } from './popup-with-text/popup-with-text.component';

@NgModule({
	imports: [
		CommonModule,
		MatDialogModule,
		MatButtonModule,
		RouterModule
	],
	declarations: [ PopupWithListComponent, PopupWithTextComponent ],
	entryComponents: [ PopupWithListComponent, PopupWithTextComponent ]
})

export class PopupModule {}
