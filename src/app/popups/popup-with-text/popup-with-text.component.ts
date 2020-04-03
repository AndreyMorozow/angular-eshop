import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
		selector: 'app-popup-with-text',
		templateUrl: 'popup-with-text.component.html',
		styleUrls: ['./popup-with-text.component.scss']
	})
export class PopupWithTextComponent {

    constructor(
        public dialogRef: MatDialogRef<PopupWithTextComponent>,
        @Inject(MAT_DIALOG_DATA) public data: String,
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

}
