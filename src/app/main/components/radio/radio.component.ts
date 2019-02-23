import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements AfterViewInit, OnInit, AfterContentInit {
  private _radiodata: any[];
  private _cardsobj = [];
  private _mybuttons = [];
  private _cardbytype = [];
  private show :boolean =false;
  constructor(
    private _CardsService: CardsService,
    private _ngxService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    this.getCards();
    this._ngxService.start();
  }
ngAfterContentInit(){
  console.log("contentInit");
}
ngAfterViewInit(){
  console.log("Lazaros Mavroudis");
}

  getCards() {
    this._CardsService.getCards()
      .subscribe(data => {
        this._radiodata = data;
        //console.log(this._radiodata["Basic"]);
        this._ngxService.stop();
        console.log(Object.keys(this._radiodata));
        this._cardsobj = Object.keys(this._radiodata);

        for (var i = 0; i < 2; i++) {
          this._mybuttons[i] = this._cardsobj[i];
        }
        console.log("Buttons" + ":" + this._mybuttons);
      })
  }

  callgroup(but) {
    console.log(but);
    this._CardsService.getCardsType(but)
      .subscribe(data => {
        this.show = true;
        this._cardbytype = data;
        console.log(this._cardbytype);
      }

      )
  }

  changecolor(but){
    console.log(but);
    if(but == "Basic"){
      return 'aris';
    }else{
      return "mav";
    }
  }

  carddet(){
    var type = $('#cardbytype').val().toString();
    console.log(type);
    this._CardsService.getCardDetails(type)
    .subscribe(data =>{
      data = data;
      console.log(data);
    })
  }
}
