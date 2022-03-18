import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-madlib',
  templateUrl: './madlib.page.html',
  styleUrls: ['./madlib.page.scss'],
})
export class MadlibPage implements OnInit {

  message;

  constructor() { }

  ngOnInit() {
    let container = prompt('Enter a container');
    let adjOne = prompt('Enter an adjective');
    let adjTwo = prompt('Enter an adjective');
    let noun = prompt('Enter a noun');
    let animal = prompt('Enter an animal');
    let vegetableOne = prompt('Enter a vegetable');
    let vegetableTwo = prompt('Enter a vegetable');
    let color = prompt('Enter a color');
    let adjThree = prompt('Enter an adjective');

    this.message = (`Make sure your lunch ${container} is filled with nutritious ${adjOne} food. Do not go to the ${adjTwo} food stand across the street from school. The hamburgers they serve are fried in ${noun} and are made of ${animal} meat. So take a sandwich made of ${vegetableOne} or ${vegetableTwo} it's much healthier! Drink ${color} milk instead of ${adjThree} colas.`)
  }

}
