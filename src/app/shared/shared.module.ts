import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SumPipe } from './pipes/summPipe/summ.pipe';
import { NavBarModule } from '../navbar/navbar.module';

@NgModule({
  imports: [ NavBarModule ],
	declarations: [ SumPipe ],
	exports: [ NavBarModule, SumPipe ]
})

export class SharedModule {}
