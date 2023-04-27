import { Component, OnDestroy } from '@angular/core';
import { CreditCardService } from 'src/app/Services/credit-card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnDestroy {

  constructor(private cardServ: CreditCardService) { }

  ngOnDestroy(): void {
    this.cardServ.destroyed()
  }

}
