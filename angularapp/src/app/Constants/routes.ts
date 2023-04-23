import { Routes } from "@angular/router";
import { CardsComponent } from "../Views/cards/cards.component";
import { ForestCastComponent } from "../Views/forest-cast/forest-cast.component";

export const RoutesPath = {
  FOREST: 'forescast',
  CARDS: 'cards'
}

export const routes: Routes = [
  { path: '', redirectTo: `/${RoutesPath.FOREST}`, pathMatch: 'full' },
  { path: RoutesPath.FOREST, component: ForestCastComponent },
  { path: RoutesPath.CARDS, component: CardsComponent },
];
