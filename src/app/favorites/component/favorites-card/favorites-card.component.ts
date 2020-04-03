import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Favorites } from '../../../models';

@Component({
  selector: 'app-favorites-card',
  templateUrl: './favorites-card.component.html',
  styleUrls: ['./favorites-card.component.scss']
})
export class FavoritesCardComponent implements OnInit {
  @Input() favorite: Favorites;
  @Output() deleteFromFavorites = new EventEmitter();
  @Output() addToCart = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
