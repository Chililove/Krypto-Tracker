import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_24h: number;
}

export interface CoinDetail extends Coin {
  description: {en: string};
  crypto_market_data: {
    market_cap: {[currency: string]: number};
    total_supply: number;
    high_24h: {[currency: string]: number};
    low_24h: {[currency: string]: number};
  };
}

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private marketsUrl = '/api/v3/coins/markets';
  private detailUrl = '/api/v3/coins';

  constructor(private http: HttpClient) {}

  // Coin list - liste af coins
  getCoins(Currencytype: string = 'usd'): Observable<Coin[]> {
    const url = `${this.marketsUrl}?vs_currency=${Currencytype}`;
    return this.http.get<Coin[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Single coin details - Hent details om hver enkelt coin
  getCoin(id: string): Observable<CoinDetail> {
    const url = `${this.detailUrl}/${id}`;
    return this.http.get<CoinDetail>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('Det skete en fejl, error occurred:', error);
    return throwError('Noget gik galt, Something went wrong, please try again later.');
  }
}
