import { Component, OnInit } from '@angular/core';
import { CryptoService, Coin } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})

export class CryptoListComponent implements OnInit {
  coins: Coin[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.cryptoService.getCoins().subscribe({
      next: (data) => {
        this.coins = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Noget gik galt, smt went wrong with api call';
        console.error(error);
        this.isLoading = false;
      }
    });
  }

}
