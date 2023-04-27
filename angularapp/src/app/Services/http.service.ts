import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCardResponse, ForecastResponse } from '../Models/Interfaces/Responses';
import { CreditCardPayload } from '../Models/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private uri = 'https://localhost:4200'
  constructor(private http: HttpClient) { }

  GetForestCast() {
    return this.http.get<ForecastResponse[]>('/weatherforecast')
  }

  getListCards() {
    return this.http.get<CreditCardResponse[]>('https://localhost:7011/api/creditcards')
  }

  getCardId(id: number) {
    return this.http.get<CreditCardResponse>(`${this.uri}/api/creditCards/${id}`)
  }

  createCardCredit(payload: CreditCardPayload) {
    return this.http.post<CreditCardResponse>(`${this.uri}/api/CreditCards`, payload)
  }

  editCardCredit(id: number, payload: CreditCardPayload) {
    return this.http.put<CreditCardResponse>(`${this.uri}/api/CreditCards/${id}`, payload)
  }

  deleteCard(id: number) {
    return this.http.delete<void>(`${this.uri}/api/CreditCards/${id}`)
  }

}
