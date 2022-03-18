import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hw1Prob10Page } from './hw1-prob10.page';

const routes: Routes = [
  {
    path: '',
    component: Hw1Prob10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hw1Prob10PageRoutingModule {}
