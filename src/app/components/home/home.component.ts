import { Component, OnInit } from '@angular/core';
import { CryptoService, Coin } from '../../services/crypto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topCoins: Coin[] = [];
  searchTerm: string = '';

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.cryptoService.getCoins().subscribe({
      next: (coins) => {
        this.topCoins = coins.slice(0, 4);
        console.log(this.topCoins);
      },
      error: (err) => console.error(err)
    });
  }
}
