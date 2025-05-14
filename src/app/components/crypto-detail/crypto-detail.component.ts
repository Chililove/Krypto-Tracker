import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoService, CoinDetail } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-detail',
  templateUrl: './crypto-detail.component.html',
  styleUrls: ['./crypto-detail.component.css']
})
export class CryptoDetailComponent implements OnInit {
  coinId: string = '';
  coin: CoinDetail | undefined;

  constructor(
    private route: ActivatedRoute,
    private cryptoService: CryptoService
  ) {}

  ngOnInit(): void {
    this.coinId = this.route.snapshot.paramMap.get('id') || '';
    this.cryptoService.getCoin(this.coinId).subscribe({
      next: (data) => {
        this.coin = data;
      },
      error: (err) => console.error(err)
    });
  }
}
