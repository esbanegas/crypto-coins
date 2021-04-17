import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.sass'],
})
export class CoinDetailComponent implements OnInit {
  @Input() selectedCoin: any = {};

  public coinDescriptions: any = [];
  public coinCurrencies: any = [];

  public currentCurrency: string = 'usd';
  public currentPrice: number = 0;

  constructor() {}

  ngOnInit(): void {
    const coinPrice = this.selectedCoin.market_data.current_price[
      this.currentCurrency
    ];

    this.currentPrice = coinPrice;

    const desciptions: any = [];
    Object.keys(this.selectedCoin.description).forEach((key) => {
      desciptions.push({
        currency: key,
        description: this.selectedCoin.description[key],
      });
    });

    this.coinDescriptions = desciptions;

    const currencies: any = [];
    Object.keys(this.selectedCoin.market_data.current_price).forEach((key) => {
      currencies.push({
        currency: key,
        value: this.selectedCoin.market_data.current_price[key],
      });
    });

    this.coinCurrencies = currencies;
  }
}
