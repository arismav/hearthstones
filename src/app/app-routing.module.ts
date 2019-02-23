import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../app/main/components/navbar/navbar.component';
import { AllcardsComponent } from '../../src/app/main/components/allcards/allcards.component';
import { AppComponent } from '../../src/app/app.component'; 
import { CardsdetComponent } from '../../src/app/main/components/cardsdetails/cardsdet/cardsdet.component';
import { CardtypesComponent } from '../../src/app/main/components/cardtypes/cardtypes.component';
import { FavouritesComponent } from '../../src/app/main/components/favourites/favourites.component';
import { HomeComponent } from '../app/main/components/home/home.component';
import { RadioComponent } from '../app/main/components/radio/radio.component';

const routes: Routes = [

  //{ path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  
  { path: 'cards',component: AllcardsComponent },
  { path: 'radio',component: RadioComponent },
  { path: 'detail/:id', component: CardsdetComponent},
  { path: 'cards/type/:col', component: AllcardsComponent},
  { path: 'favourites', component: FavouritesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }