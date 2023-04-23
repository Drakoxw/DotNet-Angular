import { Routes } from "@angular/router";
import { CardsComponent } from "../Views/cards/cards.component";

export const RoutesPath = {
  CARDS: 'cards'
}

export const routes: Routes = [
  { path: RoutesPath.CARDS, component: CardsComponent }
];
