import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-spinner',
  templateUrl: './coin-spinner.component.html',
  styleUrls: ['./coin-spinner.component.sass'],
})
export class CoinSpinnerComponent implements OnInit {
  @Input() public show: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
