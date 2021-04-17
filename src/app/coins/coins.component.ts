import { Component, OnInit } from '@angular/core';
import { Coin } from '../models/Coin';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.sass'],
})
export class CoinsComponent implements OnInit {
  public coins: Coin[] = [];
  public selectedCoin: Coin;
  public descriptions: any = [];
  public market: any = {};
  public currency = 'usd';
  public currencies: any = [];
  public showCoinDetail = false;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private RestService: RestService) {}

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(): void {
    this.RestService.get(
      'https://api.coingecko.com/api/v3/coins/list'
    ).subscribe((response: Coin[]) => {
      this.coins = response;

      console.log(response);
    });
  }

  public onSelectCoin(selectedCoin): void {
    const url = `https://api.coingecko.com/api/v3/coins/${selectedCoin.id}`;

    this.RestService.get(url).subscribe((response: Coin) => {
      this.selectedCoin = response;
      console.log(response);

      this.showCoinDetail = true;
    });
  }
}
