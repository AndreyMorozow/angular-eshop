import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopupData } from '../../models';
import {Router} from '@angular/router';

@Component({
		selector: 'app-popup-with-list',
		templateUrl: 'popup-with-list.component.html',
		styleUrls: ['./popup-with-list.component.scss']
	})
export class PopupWithListComponent {

	constructor(
		public dialogRef: MatDialogRef<PopupWithListComponent>,
		@Inject(MAT_DIALOG_DATA) public data: PopupData,
		private router: Router
	) {}

	ngOnInit() {
	}  

	onNoClick(): void {
		this.dialogRef.close();
	}

	onChangeRoute():void {
		this.router.navigateByUrl(`/${this.data.url}`);
		this.dialogRef.close();
	}

}
