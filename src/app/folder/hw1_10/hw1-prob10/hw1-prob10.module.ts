import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hw1Prob10PageRoutingModule } from './hw1-prob10-routing.module';

import { Hw1Prob10Page } from './hw1-prob10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hw1Prob10PageRoutingModule
  ],
  declarations: [Hw1Prob10Page]
})
export class Hw1Prob10PageModule {}
