import { Component, OnInit, Input } from '@angular/core';
import { Goods } from '../../../models/goods';

import { FirebaseService } from '../../../services/firebase.service';
import { Favorites, Basket } from '../../../models';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {

  @Input() goods: Goods[];
  @Input() loading: boolean;
  @Input() error: any;

  constructor(private fireBaseService: FirebaseService) { }

  ngOnInit() {
	}

	onAddFavorite(message: Favorites) {
		return this.fireBaseService.addToFavorites(message)
  }
  
  onAddToCart(item: Basket) {
    return this.fireBaseService.addToCart(item)
  }

}
