import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CLASSFORM } from 'src/app/Constants';
import { CreditCardPayload } from 'src/app/Models/Interfaces';
import { CreditCardService } from 'src/app/Services/credit-card.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
})
export class CardFormComponent implements OnInit {
  @Input() editCard!: CreditCardPayload
  @Input() addClass?: string = ''
  class = CLASSFORM;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private cardServ: CreditCardService ) {
    this.form = this.formBuilder.group({
      cardHolder: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ],
      ],
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
          Validators.pattern(/[0-9]{16}/),
        ],
      ],
      expire: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(0[1-9]|1[0-2])\/?(2[0-9]{1}|3[0-9]{1}|4[0-9]{1}|5[0-9]{1}|6[0-9]{1})$/
          ),
        ],
      ],
      cvv: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
          Validators.pattern(/[0-9]{3}/),
        ],
      ],
    });
  }
  ngOnInit(): void {
    if (this.editCard) {
      this.form.get('cardHolder')?.setValue(this.editCard.cardHolder)
      this.form.get('cardNumber')?.setValue(this.editCard.cardNumber)
      this.form.get('expire')?.setValue(this.editCard.expire)
      this.form.get('cvv')?.setValue(this.editCard.cvv)
    }
  }

  saveCardCredit() {
    const payload: CreditCardPayload = {
      cardHolder: this.cardHolder?.value,
      cardNumber: this.cardNumber?.value,
      expire: this.expire?.value,
      cvv: this.cvv?.value
    }
    this.form.reset()
    if (this.editCard) {
      payload.id = this.editCard.id
      this.cardServ.editCard(Number(payload.id), payload)
    } else {
      this.cardServ.createCard(payload)
    }
  }

  editCardCredit() {
    const payload: CreditCardPayload = {
      cardHolder: this.cardHolder?.value,
      cardNumber: this.cardNumber?.value,
      expire: this.expire?.value,
      cvv: this.cvv?.value
    }
    this.cardServ.createCard(payload)
    this.form.reset()
  }

  get cardHolder() { return this.form.get('cardHolder') }
  get cardHolderError(): boolean {
    const control = this.form.get('cardHolder')
    return control ? control.invalid && (control.dirty || control.touched) : false
  }

  get cardNumber() { return this.form.get('cardNumber') }
  get cardNumberError(): boolean {
    const control = this.form.get('cardNumber')
    return control ? control.invalid && (control.dirty || control.touched) : false
  }

  get expire() { return this.form.get('expire') }
  get expireError(): boolean {
    const control = this.form.get('expire')
    return control ? control.invalid && (control.dirty || control.touched) : false
  }

  get cvv() { return this.form.get('cvv') }
  get cvvError(): boolean {
    const control = this.form.get('cvv')
    return control ? control.invalid && (control.dirty || control.touched) : false
  }

}
