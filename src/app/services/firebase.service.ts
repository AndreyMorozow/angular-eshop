import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { AngularFirestore,  AngularFirestoreCollection } from '@angular/fire/firestore';
import { Favorites, Basket } from '../models';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { PopupWithTextComponent } from '../popups/popup-with-text/popup-with-text.component';

@Injectable({
	providedIn: 'root'
})

export class FirebaseService {

	constructor(private afs: AngularFirestore, public dialog: MatDialog) {};

	getGoods(): Observable<any> {
		return this.afs.collection('goods').snapshotChanges().pipe(
			map(actions => actions.map(a => {
				const id = a.payload.doc.id;
				const data = a.payload.doc.data();
				return { id, ...(data as {}) };
			}))
		);
	}

	addToFavorites(item: Favorites) {
		return new Promise<any>((resolve, reject) => {
			this.afs
				.collection("favorites")
				.add(item)
				.then(res => {this.openPopup('Item has been added to favorites')}, error => {this.openPopup(`Something went wrong: ${error}`)})
		});
	}

	getFavorites(): Observable<any> {
		return this.afs.collection('favorites').snapshotChanges().pipe(
			map(actions => actions.map(a => {
				const id = a.payload.doc.id;
				const data = a.payload.doc.data();
				return { id, ...(data as {}) };
			}))
		);
	}

	deleteFavorite(id: string) {
		return new Promise<any>((resolve, reject) => {
			this.afs
				.collection('favorites')
				.doc(id)
				.delete()
				.then(res => {this.openPopup('Item has been deleted from favorites')}, error => {this.openPopup(`Something went wrong: ${error}`)})
		});
	}

	addToCart(item: Basket) {
		return new Promise<any>((resolve, reject) => {
			this.afs
				.collection("cart")
				.add(item)
				.then(res => {this.openPopup('Item has been added to basket')}, error => {this.openPopup(`Something went wrong: ${error}`)})
		});
	}

	addToCartWithDeleting(item: Basket) {
		const prop = 'id'
		const dataForCart = Object.keys(item).reduce((object, key) => {
			if (key !== prop) {
			  object[key] = item[key]
			}
			return object
		  }, {})
		return new Promise<any>((resolve, reject) => {
			this.afs
				.collection("cart")
				.add(dataForCart)
				.then(res => {
					this.afs.collection('favorites').doc(item.id).delete()
					this.openPopup('Item has been added to basket and deleted from favorites');
				}, error => {this.openPopup(`Something went wrong: ${error}`)})
		});
	}

	getCart(): Observable<any> {
		return this.afs.collection('cart').snapshotChanges().pipe(
			map(actions => actions.map(a => {
				const id = a.payload.doc.id;
				const data = a.payload.doc.data();
				return { id, ...(data as {}) };
			}))
		);
	}

	openPopup = (text: String) => {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.data = {
			text: text,
		};
		dialogConfig.autoFocus = false;
		this.dialog.open(PopupWithTextComponent, dialogConfig)
	}

	deleteFromCart(id: string) {
		return new Promise<any>((resolve, reject) => {
			this.afs
				.collection('cart')
				.doc(id)
				.delete()
				.then(res => {this.openPopup('Item has been deleted from basket')}, error => {this.openPopup(`Something went wrong: ${error}`)})
		});
	}

	async deleteAllBasket() {
		const qry: firebase.firestore.QuerySnapshot = await this.afs.collection('cart').ref.get();

		qry.forEach(doc => {
      doc.ref.delete();
    });
	}

}
