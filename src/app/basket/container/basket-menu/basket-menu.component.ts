import { Component, OnInit, Input } from '@angular/core';
import { Basket } from '../../../models';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
	selector: 'app-basket-menu',
	templateUrl: './basket-menu.component.html',
	styleUrls: ['./basket-menu.component.scss']
})
export class BasketMenuComponent implements OnInit {

	@Input() basket: Basket[];
	@Input() loading: boolean;
	@Input() error: any;
	totalPrice: number;
	constructor(private fireBaseService: FirebaseService) {}

	ngOnInit() {

	}

	deleteAllBasket() {
		return this.fireBaseService.deleteAllBasket()
	}

}
