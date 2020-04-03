import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BasketFormComponent } from './basket-form/basket-form.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule
	],
	declarations: [ BasketFormComponent ],
	exports: [ BasketFormComponent ]
})

export class FormsModule {}
