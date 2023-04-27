import { Component, OnInit } from '@angular/core';
import { CreditCardService } from 'src/app/Services/credit-card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor(public cardServ: CreditCardService) { }

  ngOnInit(): void {
    this.cardServ.getList();
  }

}
