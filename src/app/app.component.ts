import { Component } from '@angular/core';
import { Hw1Prob10Page } from './folder/hw1_10/hw1-prob10/hw1-prob10.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Madlib', url: '/folder/madlib/madlib', icon: 'newspaper'},
    { title: 'Average Score/hw1-10', url: '/folder/hw1_10/hw1-prob10'},
    { title: 'Favorite City/hw1-12', url: '/folder/hw1_12/hw1prob12'},
    { title: 'Stocks/hw1-17', url: '/folder/hw1_17/hw1prob17'}
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
