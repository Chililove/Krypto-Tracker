import { Component, OnInit } from '@angular/core';
import { CryptoService, Coin } from 'src/app/services/crypto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})

export class CryptoListComponent implements OnInit {
  coins: Coin[] = [];
  isLoading = true;
  errorMessage = '';
  hoveredCoin: Coin | null = null;

  constructor(private cryptoService: CryptoService, private router: Router) {}

  ngOnInit(): void {
    this.cryptoService.getCoins().subscribe({
      next: (data) => {
        this.coins = data;
        this.sortCoins(); //.sort((a, b) => b.price_change_24h - a.price_change_24h);
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Noget gik galt, smt went wrong with api call';
        console.error(error);
        this.isLoading = false;
      }
    });
  }
  
  onMouseEnter(coin: Coin): void {
    this.hoveredCoin = coin;
  }

  onMouseLeave(): void {
    this.hoveredCoin = null;
  }

  onOverlayEnter(): void {
    // Intet skal gøres, når musen er på overlayet
  }

  onOverlayLeave(): void {
    // Fjern hoveredCoin, når musen forlader overlayet
    this.hoveredCoin = null;
  }


goToCoinDetail(coinId: string): void {
  this.router.navigate(['/coin-detail', coinId]);
}

sortOption = 'mostGain';


sortCoins() {
  if (this.sortOption === 'mostGain') {
    this.coins.sort((a, b) => b.price_change_24h - a.price_change_24h);
  } else if (this.sortOption === 'mostLoss') {
    this.coins.sort((a, b) => a.price_change_24h - b.price_change_24h);
  } else if (this.sortOption === 'marketCap') {
    this.coins.sort((a, b) => b.market_cap - a.market_cap);
  }
}

  
}
