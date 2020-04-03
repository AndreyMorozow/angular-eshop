import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Basket } from '../../../models';

@Component({
  selector: 'app-basket-card',
  templateUrl: './basket-card.component.html',
  styleUrls: ['./basket-card.component.scss']
})
export class BasketCardComponent implements OnInit {
  @Input() basketItem: Basket;
  @Output() deleteFromBasket = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
