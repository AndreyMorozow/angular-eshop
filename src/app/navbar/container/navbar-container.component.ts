import { Component, OnInit } from '@angular/core';
import { Favorites, Basket } from '../../models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { PopupWithListComponent } from '../../popups/popup-with-list/popup-with-list.component';

import {
  RootStoreState,
  FavoritesStoreActions,
  FavoritesStoreSelectors,
  BasketStoreActions,
  BasketStoreSelectors
} from '../../root-store';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar-container.component.html',
	styleUrls: ['./navbar-container.component.scss']
})
export class NavbarComponent implements OnInit {

  favorites$: Observable<Favorites[]>;
  basket$: Observable<Basket[]>;
  constructor(private store$: Store<RootStoreState.State>, public dialog: MatDialog) { }

  ngOnInit() {
	this.favorites$ = this.store$.select(
		FavoritesStoreSelectors.selectAllFavoritesItems
	);
	this.basket$ = this.store$.select(
		BasketStoreSelectors.selectAllBasketItems
	  );
	this.store$.dispatch(
		new FavoritesStoreActions.LoadRequestAction()
	);
	this.store$.dispatch(
		new BasketStoreActions.LoadRequestAction()
	);
  }

  onOpenFavorites() {
	const dialogConfig = new MatDialogConfig();
	let popupData = [];
	this.favorites$.subscribe(elem => popupData = elem)
    dialogConfig.data = {
		popupData: popupData.slice(0,4),
		url: 'favorites',
    };

    dialogConfig.autoFocus = false;

    this.dialog.open(PopupWithListComponent, dialogConfig)
  }

  onOpenBasket() {
	const dialogConfig = new MatDialogConfig();
	let popupData = [];
	this.basket$.subscribe(elem => popupData = elem)
    dialogConfig.data = {
		popupData: popupData,
		url: 'basket',
    };

    dialogConfig.autoFocus = false;

    this.dialog.open(PopupWithListComponent, dialogConfig)
  }

}
