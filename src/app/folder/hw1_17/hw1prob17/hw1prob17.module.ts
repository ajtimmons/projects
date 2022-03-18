import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hw1prob17PageRoutingModule } from './hw1prob17-routing.module';

import { Hw1prob17Page } from './hw1prob17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hw1prob17PageRoutingModule
  ],
  declarations: [Hw1prob17Page]
})
export class Hw1prob17PageModule {}
