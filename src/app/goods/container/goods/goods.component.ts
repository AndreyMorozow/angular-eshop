import { Component, OnInit } from '@angular/core';
import { Goods } from '../../../models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  RootStoreState,
  GoodsStoreActions,
  GoodsStoreSelectors
} from '../../../root-store';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  goods$: Observable<Goods[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;
  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.goods$ = this.store$.select(
      GoodsStoreSelectors.selectAllGoodsItems
    );

    this.error$ = this.store$.select(
      GoodsStoreSelectors.selectGoodsError
    );

    this.isLoading$ = this.store$.select(
      GoodsStoreSelectors.selectGoodsIsLoading
    );

    this.store$.dispatch(
      new GoodsStoreActions.LoadRequestAction()
    );
	}
}
