import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ActivatedRoute } from '@angular/router';
import { CardtypesComponent } from '../cardtypes/cardtypes.component';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-allcards',
  templateUrl: './allcards.component.html',
  styleUrls: ['./allcards.component.css']
})
export class AllcardsComponent implements OnInit {
  private _cards;
  private parentvar :string;
  private _basic_cards;
  private _cardsback;
  private _alldata;
  public i: number = 0;
  private _collection;
  private _searchflag = true;
  p: number = 1;
  private _cardtype = [];
  private found ;
  private _iconflag = false;
  private sets;
  private pages ;
  private parentvar2 ;
  constructor(
    private _cardService: CardsService,
    private ngxService: NgxUiLoaderService,
    private route: ActivatedRoute,
    private _http: HttpClient,
    private storage: LocalStorageService
  ) { 

    $(document).ready(function(){
      if($('.in.collapse').hasClass('show') == false){
        console.log("no");
      }else{
        console.log("yes");
      }
    })
  }



  ngOnInit() {
    this.ngxService.start();
    this.getCards();
    //this.getCardsBack();
    //const collection = this.route.snapshot.paramMap.get('col');
    this.found = this.route.snapshot.paramMap.get('col');
    console.log(this.found);
    // this._typeComp.getByType(type);
    this._cardService.getCardsType(this.found)
    .subscribe(data => {
        
      this.sets = data;
     // console.log(this._cardstypes);
       
    
    })
  
  }
  parentoutput($event){
    this.parentvar =$event;
  }

  parentoutput2($event){
    this.parentvar2 = $event;
    console.log(this.parentvar2);
  }

  changeicon(){
    if(this._iconflag == true){
      this._iconflag = false;
      $('.in.collapse').addClass('show');
      //$('#sidebar').toggleClass('slidein');
    }else{
      this._iconflag = true;
      $('.in.collapse').removeClass('show');
      //$('#sidebar').toggleClass('slideout');
    }
  }

  getCards() {
    this._cardtype = [];
    this._cardService.getCards()
      .subscribe(data => {
        this.ngxService.stop();
        this._cards = data;
        //console.log(Object.keys(data));
        //console.log(Object.keys(data).length);

        this._cardtype.push(Object.keys(data));
        this._cardtype = this._cardtype[0];
        //console.log(this._cardtype);


        for (this.i = 0; this.i < this._cardtype.length; this.i++) {

         // console.log(this._cardtype[this.i]);
        }


        //this._basic_cards = data["Basic"];
        //this._alldata = data;
        //console.log(this._basic_cards);




      }


      )
  }

  

  getCardType(type) {

    

    this._searchflag = false;
    //const collection = this.route.snapshot.paramMap.get('col');
    this.found = type;
    console.log(this.found);
    // this._typeComp.getByType(type);
    this._cardService.getCardsType(this.found)
    .subscribe(data => {
     this.pages = true;
     this.sets = data;
     // console.log(this._cardstypes);
     this._searchflag = true;
     
    
    })
    console.log("SearchFlag = " + this._searchflag);
  }
  

  }




