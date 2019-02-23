import { Component, OnInit } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { CardsService } from '../../../services/cards.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  private _favIds = [];
  constructor(
    private storage : LocalStorageService,
    private _cardService: CardsService
  ) { }

  ngOnInit() {
    this.favourites();
  }

  public favourites() {
    this._favIds = this.storage.retrieve('ids');
    console.log(this._favIds);
  }

}
