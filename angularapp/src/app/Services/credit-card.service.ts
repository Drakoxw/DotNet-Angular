import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { CreditCardPayload, CreditCardResponse } from '../Models/Interfaces';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  public listCards!: CreditCardResponse[];
  private susb: Subscription[] = []

  constructor(private http: HttpService, private toastr: ToastrService) { }

  destroyed() {
    this.susb.map(el => el.unsubscribe())
  }

  getList() {
    const r1 = this.http.getListCards().subscribe(res => {
      this.listCards = res
    }, err => {
      this.toastr.error(String(err) , 'Error');
    })
    this.susb.push(r1)
  }

  createCard(payload: CreditCardPayload) {
    const r2 = this.http.createCardCredit(payload).subscribe(() => {
      this.getList()
      this.toastr.success('Credit card created', 'OK !');
    }, err => {
      this.toastr.error(String(err) , 'Error');
    })
    this.susb.push(r2)
  }

  editCard(id: number, payload: CreditCardPayload) {
    const r3 = this.http.editCardCredit(id, payload).subscribe(() => {
      this.toastr.info('Credit card edited', 'OK !');
      this.getList()
    }, err => {
      this.toastr.error(String(err) , 'Error');
    })
    this.susb.push(r3)
  }

  deleteCard(id: number) {
    const r4 = this.http.deleteCard(id).subscribe(() => {
      this.toastr.warning('Credit card deleted', 'OK !');
      this.getList()
    }, err => {
      this.toastr.error(String(err) , 'Error');
    })
    this.susb.push(r4)
  }

}
