import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../../../services/cards.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardsdet',
  templateUrl: './cardsdet.component.html',
  styleUrls: ['./cardsdet.component.css']
})
export class CardsdetComponent implements OnInit {
private _cardInfo ;
  constructor(
    private route: ActivatedRoute,
    private _cardService : CardsService
  ) { }

  ngOnInit() {
    this.getCardDetails();
  }

  getCardDetails():void{

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this._cardService.getCardDetails(id)
    .subscribe(data => {
     this._cardInfo = data;
     console.log(this._cardInfo);
    }
    )
  }

}
