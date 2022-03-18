import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hw1prob17Page } from './hw1prob17.page';

const routes: Routes = [
  {
    path: '',
    component: Hw1prob17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hw1prob17PageRoutingModule {}
