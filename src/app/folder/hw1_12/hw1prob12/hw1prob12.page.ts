import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1prob12',
  templateUrl: './hw1prob12.page.html',
  styleUrls: ['./hw1prob12.page.scss'],
})
export class Hw1prob12Page implements OnInit {

  length;
  upper;
  lower;
  firstLetter;
  constructor() { }

  ngOnInit() {
    let city = prompt('What is your favorite city?');
    this.length = (`${city}`.length);
    this.upper = (`${city}`.toUpperCase());
    this.lower = (`${city}`.toLowerCase());
    this.firstLetter = (`${city}`.charAt(0));
  }

}
