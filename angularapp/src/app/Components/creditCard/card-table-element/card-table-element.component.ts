import { Component, Input } from '@angular/core';
import { CreditCardResponse } from 'src/app/Models/Interfaces';
import { CreditCardService } from 'src/app/Services/credit-card.service';

@Component({
  selector: 'app-card-table-element',
  templateUrl: './card-table-element.component.html',
  styleUrls: ['./card-table-element.component.css']
})
export class CardTableElementComponent {
  @Input() creditCard!: CreditCardResponse

  hidden: boolean = true
  showModal: boolean = false
  showModalDelete: boolean = false

  constructor(public cardServ: CreditCardService) { }

  toogle() {
    this.hidden = !this.hidden
  }

  closeModal() {
    this.showModal = false
    this.showModalDelete = false
  }

  editItem() {
    this.showModal = true
    this.toogle()
  }

  deleteItem() {
    this.showModalDelete = true
    this.toogle()
  }

  serviceDelete() {
    this.cardServ.deleteCard(this.creditCard.id)
    this.closeModal()
  }
}
