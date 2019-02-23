import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private _apiUrl = environment.api.url;
  private _endpoints = environment.api.endpoints;
  constructor(
    private _http : HttpClient
  ) { }

  public getCards() : Observable<any>{
    return this._http.get(this.getEndpoint(this._endpoints.allcards));
  }

  public getCardsBack() :Observable<any>{
    return this._http.get(this.getEndpoint(this._endpoints.cardbacks))
  }

  public getCardDetails(cardId:string) : Observable<any>{
    return this._http.get(this.getEndpoint(this._endpoints.allcards + '/' + cardId));
  }

  public getEndpoint(endpoint:string) : string{
    return `${this._apiUrl}/${endpoint}`;
  }

  public getCardsType(type:string) : Observable<any>{
    return this._http.get(this.getEndpoint(this._endpoints.cardtypes + '/' + type));
  }

}
