import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1-prob10',
  templateUrl: './hw1-prob10.page.html',
  styleUrls: ['./hw1-prob10.page.scss'],
})
export class Hw1Prob10Page implements OnInit {
  test1;
  test2;
  test3;
  avg;
  constructor() { }

  ngOnInit() {
      
      
  }

  calcAvg(){
    this.avg = (this.test1 + this.test2 + this.test3) / 3;
  }

}
