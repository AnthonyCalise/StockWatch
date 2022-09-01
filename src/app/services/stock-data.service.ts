import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { validRanges } from '../utils/constants';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StockDataService {
  public readonly API_URL: string = 'query1.finance.yahoo.com/v8/';
  public readonly PROXY_URL = 'https://cors-anywhere.herokuapp.com/'; // Using this for local development
  constructor(private http: HttpClient) {}

  getHistoricalData(ticker: string, timeRange: string): Observable<any> {
    if (!validRanges.includes(timeRange)) return of(false);
    return this.http.get(
      `${this.PROXY_URL}${this.API_URL}finance/chart/${ticker}?metrics=high?&interval=1d&range=${timeRange}`
    );
  }
}
