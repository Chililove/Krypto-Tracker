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
  allCoins: Coin[] = []; 

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.cryptoService.getCoins().subscribe({
      next: (coins) => {
        this.allCoins = coins; 
        this.topCoins = coins.slice(0, 4);
        console.log(this.allCoins);
      },
      error: (err) => console.error(err)
    });
  }

  get filteredCoins(): Coin[] {
    if (!this.searchTerm.trim()) {
      return this.topCoins;
    }
    
    return this.allCoins.filter((coin) =>
      coin.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
