import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hw1prob12Page } from './hw1prob12.page';

const routes: Routes = [
  {
    path: '',
    component: Hw1prob12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hw1prob12PageRoutingModule {}
