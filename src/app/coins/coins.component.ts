import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.sass'],
})
export class CoinsComponent implements OnInit {
  public coins: any = [];
  public selectedCoin: any = {};
  public descriptions: any = [];
  public market: any = {};
  public currency: string = 'usd';
  public currencies: any = [];

  constructor(private RestService: RestService) {}

  ngOnInit(): void {
    this.loadData();
  }

  //'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  public loadData() {
    this.RestService.get(
      'https://api.coingecko.com/api/v3/coins/list'
    ).subscribe((response) => {
      this.coins = response;

      console.log(response);
    });
  }

  public onSelectCoin(selectedCoin): void {
    const url: string = `https://api.coingecko.com/api/v3/coins/${selectedCoin.id}`;

    this.RestService.get(url).subscribe((response) => {
      this.selectedCoin = response;
      console.log(response);

      const desciptions: any = [];
      Object.keys(this.selectedCoin.description).forEach((key) => {
        desciptions.push({
          currency: key,
          description: this.selectedCoin.description[key],
        });
      });

      this.descriptions = desciptions;

      const currencies: any = [];
      Object.keys(this.selectedCoin.market_data.current_price).forEach(
        (key) => {
          currencies.push({
            currency: key,
            value: this.selectedCoin.market_data.current_price[key],
          });
        }
      );

      this.currencies = currencies;
    });

    // this.selectedCoin = selectedCoin;
  }
}
