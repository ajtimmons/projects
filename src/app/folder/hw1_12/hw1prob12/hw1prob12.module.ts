import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hw1prob12PageRoutingModule } from './hw1prob12-routing.module';

import { Hw1prob12Page } from './hw1prob12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hw1prob12PageRoutingModule
  ],
  declarations: [Hw1prob12Page]
})
export class Hw1prob12PageModule {}
