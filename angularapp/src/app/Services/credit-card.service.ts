import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { CreditCardPayload, CreditCardResponse } from '../Models/Interfaces';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  public listCards!: CreditCardResponse[];
  private susb: Subscription[] = []

  constructor(private http: HttpService) { }

  destroyed() {
    this.susb.map(el => el.unsubscribe())
  }

  getList() {
    const r1 = this.http.getListCards().subscribe(res => {
      this.listCards = res
    }, err => console.log(err))

    this.susb.push(r1)
  }

  createCard(payload: CreditCardPayload) {
    const r2 = this.http.createCardCredit(payload).subscribe(() => this.getList())
    this.susb.push(r2)
  }

  editCard(id: number, payload: CreditCardPayload) {
    const r3 = this.http.editCardCredit(id, payload).subscribe(() => this.getList())
    this.susb.push(r3)
  }

  deleteCard(id: number) {
    const r4 = this.http.deleteCard(id).subscribe(() => this.getList())
    this.susb.push(r4)
  }

}
