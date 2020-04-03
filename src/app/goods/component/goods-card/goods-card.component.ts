import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goods } from '../../../models/goods';

@Component({
  selector: 'app-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.scss']
})
export class GoodsCardComponent implements OnInit {
	@Input() good: Goods;

  @Output() addToFavorites = new EventEmitter();
  @Output() addToCart = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
