import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Favorites, Basket } from '../../models';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarContentComponent implements OnInit {

  @Input() favorites: Favorites[];
  @Input() basket: Basket[];

  @Output() openFavoritePopup = new EventEmitter();
  @Output() openBasketPopup = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }

}
