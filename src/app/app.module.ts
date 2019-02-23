import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { startsWithPipe } from './pipes/startswith.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main/components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CardsService } from '../app/services/cards.service';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { hearthcallsInterceptor } from '../app/interceptors/hearthcalls';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION, NgxUiLoaderRouterModule  } from 'ngx-ui-loader';
import { AllcardsComponent } from './main/components/allcards/allcards.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {NgxPaginationModule} from 'ngx-pagination';
import { CardsdetComponent } from './main/components/cardsdetails/cardsdet/cardsdet.component';
import { CardtypesComponent } from './main/components/cardtypes/cardtypes.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { FavouritesComponent } from './main/components/favourites/favourites.component';
import { HomeComponent } from './main/components/home/home.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { RadioComponent } from './main/components/radio/radio.component';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: 'red',
  fgsSize: 60,
  fgsType: SPINNER.ballSpinClockwiseFadeRotating
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllcardsComponent,
    CardsdetComponent,
    CardtypesComponent,
    FavouritesComponent,
    startsWithPipe,
    HomeComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxMasonryModule,
    FilterPipeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    NgxPaginationModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxWebstorageModule.forRoot()
  ],
  providers: [CardsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: hearthcallsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
