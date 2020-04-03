import { Component, OnInit } from '@angular/core';
import { Basket } from '../../../models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
	RootStoreState,
	BasketStoreActions,
	BasketStoreSelectors
} from '../../../root-store';

@Component({
	selector: 'app-basket',
	templateUrl: './basket.component.html',
	styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

	basket$: Observable<Basket[]>;
	error$: Observable<any>;
	isLoading$: Observable<boolean>;
	constructor(private store$: Store<RootStoreState.State>) { }

	ngOnInit() {
		this.basket$ = this.store$.select(
			BasketStoreSelectors.selectAllBasketItems
		);

		this.error$ = this.store$.select(
			BasketStoreSelectors.selectBasketError
		);

		this.isLoading$ = this.store$.select(
			BasketStoreSelectors.selectBasketIsLoading
		);

		this.store$.dispatch(
			new BasketStoreActions.LoadRequestAction()
		);
	}

}
