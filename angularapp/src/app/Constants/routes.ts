import { Routes } from "@angular/router";
import { CardsComponent } from "../Views/cards/cards.component";
import { ForestCastComponent } from "../Views/forest-cast/forest-cast.component";
import { DocComponent } from "../Views/doc/doc.component";

export const RoutesPath = {
  FOREST: 'forescast',
  CARDS: 'cards',
  COMP_DOC: 'comp-document'
}

export const routes: Routes = [
  { path: '', redirectTo: `/${RoutesPath.FOREST}`, pathMatch: 'full' },
  { path: RoutesPath.FOREST, component: ForestCastComponent },
  { path: RoutesPath.CARDS, component: CardsComponent },
  { path: RoutesPath.CARDS, component: CardsComponent },
  { path: RoutesPath.COMP_DOC, component: DocComponent },
  { path: '**', redirectTo: `/${RoutesPath.FOREST}` }
];
