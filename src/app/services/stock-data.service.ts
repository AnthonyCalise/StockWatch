import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { validRanges } from '../utils/constants';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StockDataService {
  public readonly API_URL: string = 'https://query1.finance.yahoo.com/v8/';

  constructor(private http: HttpClient) {}

  getHistoricalData(ticker: string, timeRange: string): Observable<any> {
    return of([
      {
        time: new Date(2013, 1, 1),
        open: 268.93,
        high: 268.93,
        low: 262.8,
        close: 265.0,
        volume: 6118146,
      },
      {
        time: new Date(2013, 1, 4),
        open: 262.78,
        high: 264.68,
        low: 259.07,
        close: 259.98,
        volume: 3723793,
      },
      {
        time: new Date(2013, 1, 5),
        open: 262.0,
        high: 268.03,
        low: 261.46,
        close: 266.89,
        volume: 4013780,
      },
      {
        time: new Date(2013, 1, 6),
        open: 265.16,
        high: 266.89,
        low: 261.11,
        close: 262.22,
        volume: 2772204,
      },
      {
        time: new Date(2013, 1, 7),
        open: 264.1,
        high: 264.1,
        low: 255.11,
        close: 260.23,
        volume: 3977065,
      },
      {
        time: new Date(2013, 1, 8),
        open: 261.4,
        high: 265.25,
        low: 260.56,
        close: 261.95,
        volume: 3879628,
      },
      {
        time: new Date(2013, 1, 11),
        open: 263.2,
        high: 263.25,
        low: 256.6,
        close: 257.21,
        volume: 3407457,
      },
      {
        time: new Date(2013, 1, 12),
        open: 259.19,
        high: 260.16,
        low: 257.0,
        close: 258.7,
        volume: 2944730,
      },
      {
        time: new Date(2013, 1, 13),
        open: 261.53,
        high: 269.96,
        low: 260.3,
        close: 269.47,
        volume: 5295786,
      },
      {
        time: new Date(2013, 1, 14),
        open: 267.37,
        high: 270.65,
        low: 265.4,
        close: 269.24,
        volume: 3464080,
      },
      {
        time: new Date(2013, 1, 15),
        open: 267.63,
        high: 268.92,
        low: 263.11,
        close: 265.09,
        volume: 3981233,
      },
    ]);
    // Trying to fix CORS issues, gonna hardcode some data for now
    // if (!validRanges.includes(timeRange)) return of(false);
    // return this.http.get(
    //   `${this.API_URL}finance/chart/${ticker}?metrics=high?&interval=1d&range=${timeRange}`
    // );
  }
}
