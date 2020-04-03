import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-basket-form',
	templateUrl: './basket-form.component.html',
	styleUrls: ['./basket-form.component.scss']
})
export class BasketFormComponent implements OnInit {

	formGroup: FormGroup;
	textAlert: string = 'This field is required';
	post: any = '';

	constructor(private formBuilder: FormBuilder) {

	}

	ngOnInit() {
		this.createForm();
	}

	createForm() {
		let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		let phoneregex: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
		this.formGroup = this.formBuilder.group({
			'email': [null, [Validators.required, Validators.pattern(emailregex)] ],
			'phone': [null, [Validators.required, Validators.pattern(phoneregex)] ],
			'name': [null, Validators.required],
			'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
		});
	}

	get name() {
		return this.formGroup.get('name') as FormControl
	}

	getErrorEmail() {
		return this.formGroup.get('email').hasError('required') ? 'Field is required' :
			this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' : ''
	}

	getErrorPhone() {
		return this.formGroup.get('phone').hasError('required') ? 'Field is required' :
			this.formGroup.get('phone').hasError('pattern') ? 'Not a valid phone number' : ''
	}

	onSubmit(post) {
		this.post = post;
	}
}
