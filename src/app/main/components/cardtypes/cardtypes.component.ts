import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import * as $ from 'jquery';
import { startsWithPipe } from '../../../pipes/startswith.pipe';
import { FormsModule } from '@angular/forms';
import { NgxMasonryModule } from 'ngx-masonry';

@Component({
  selector: 'app-cardtypes',
  templateUrl: './cardtypes.component.html',
  styleUrls: ['./cardtypes.component.css']
})
export class CardtypesComponent implements OnInit {
  @Input() private cardtypes: any;
  @Input() private pagination: any;
  @Input() private searchflag: boolean;
  @Output() childoutput = new EventEmitter <string>();
  @Output() childoutput2 = new EventEmitter <boolean>();
  query:string = '';
  private childvar : string = 'Aris Mavroudis';
  private _cards;
  private _basic_cards;
  private _cardsback;
  private _alldata;
  public i: number = 0;
  public j: number = 0;
  public k: number = 0;
  p: number = 1;
  private _cardtype = [];
  private _cardstypes;
  private collection;
  private favourites = [];
  private favouritesIds = [];
  private _addedToFav = false;
  private local = false;
  private childvarflag :boolean = false;
  constructor(
    private _cardService: CardsService,
    private route: ActivatedRoute,
    private storage: LocalStorageService

  ) { }
  ngOnChanges(){
    //this.pagination = true;
    this.checkfavs();
    //console.log(this.cardtypes);
    console.log("SearchFlagComp = " + this.searchflag);
    console.log("PAGINATION" + this.pagination);
  }

  Outputchild(){
    this.childvarflag = true;
    this.childoutput.emit(this.childvar);
    this.childoutput2.emit(this.childvarflag);
    console.log(this.childvarflag);
  }

  ngOnInit() {
    
    this.favourites = [];
    
    //this.getCards();
    //console.log(this.cardtypes);
    //console.log("georgia");

    var update = this.storage.retrieve('ids');
    //console.log(update);
    if (update != null) {
      var len = Object.keys(update).length;

      this.local = true;

      for (this.i = 0; this.i < len; this.i++) {
        //console.log("aris");
        this.favourites.push(update[this.i]);
        this.favouritesIds.push(update[this.i].cardId);
      }
    }
    console.log(this.favouritesIds);

  }



  checkfavs(){
    console.log("played");
  var update = this.storage.retrieve('ids');
  var len = Object.keys(update).length;
  setTimeout(function () {

    $('#cards').find('.cols-cards').each(function () {

      for (var t = 0; t < len; t++) {
        if ($(this).find('.month a:nth-child(1)').text() == update[t].cardId) {
          $(this).find('.year').addClass("favaris");
         // console.log("same");
        }
      }
      $(this).find('.date .year').click(function () {


        if ($(this).hasClass("favaris") == true) {
          $(this).removeClass("favaris");
        } else {
          $(this).addClass("favaris");
        }
      })
    })
}, 500);

  }










  public addToFav(id: any) {

    console.log(id.cardId);
    var flag = false;
    //this.favourites.push(id);
    //this.storage.store('ids', this.favourites);
    if (this.favourites.length > 0) {
      //console.log("want to add");
      //console.log(this.favourites.length);
      for (this.j = 0; this.j < this.favourites.length; (this.j)++) {
        //console.log(this.favourites[this.j]);
        //console.log(id);
        if ((id.cardId) == ((this.favourites[this.j]).cardId)) {
          console.log("remove");
          // console.log(id.cardId);
          flag = true;

          this.favourites.splice(this.j, 1);
          this.storage.store('ids', this.favourites);
        }
      }
      if (flag == false) {
        this.favourites.push(id);
        this.storage.store('ids', this.favourites);
      }

    } else {
      this.favourites.push(id);
      this.storage.store('ids', this.favourites);
    }
  }




}
