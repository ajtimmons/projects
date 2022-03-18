import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1prob17',
  templateUrl: './hw1prob17.page.html',
  styleUrls: ['./hw1prob17.page.scss'],
})
export class Hw1prob17Page implements OnInit {

  firstValue;
  firstCommission;
  finalValue;
  finalCommission;
  profit;
  constructor() { }

  ngOnInit() {
    const shares = 1000;
    const firstPrice = 32.87;
    const firstValue = shares * firstPrice;
    let firstCommission = .02 * firstValue;
    const finalPrice = 33.92;
    const finalValue = shares * finalPrice;
    const finalCommission = .02 * finalValue;
    const totalCommission = firstCommission + finalCommission;
    const profit = finalValue - firstValue - totalCommission; 
    this.firstValue = firstValue;
    this.firstCommission = firstCommission;
    this.finalValue = finalValue;
    this.finalCommission = finalCommission;
    this.profit = profit;
  }

}
