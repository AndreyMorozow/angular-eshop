import { Component, OnInit, Input } from '@angular/core';
import { Basket } from '../../../models';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.scss']
})
export class BasketListComponent implements OnInit {

  @Input() basket: Basket[];
  @Input() loading: boolean;
  @Input() error: any;
  
  constructor(private fireBaseService: FirebaseService) { }

  ngOnInit() {
  }

  onDeleteFromBasket(id: {id: string}) {
		return this.fireBaseService.deleteFromCart(id.id)
	}

}
