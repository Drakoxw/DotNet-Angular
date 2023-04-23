import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForecastResponse } from '../Models/Interfaces/Responses';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  GetForestCast() {
    return this.http.get<ForecastResponse[]>('/weatherforecast')
  }
}
