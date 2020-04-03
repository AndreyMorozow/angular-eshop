import { Component, OnInit, Input } from '@angular/core';
import { Favorites, Basket } from '../../../models';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit {

	@Input() favorites: Favorites[];
  @Input() loading: boolean;
	@Input() error: any;

  constructor(private fireBaseService: FirebaseService) { }

  ngOnInit() {
  }

  onDeleteFromFavorites(id: {id: string}) {
		return this.fireBaseService.deleteFavorite(id.id)
  }
  
  onAddToCart(item: Basket) {
    return this.fireBaseService.addToCartWithDeleting(item)
  }

}
