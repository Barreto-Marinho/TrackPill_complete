import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Compart1Page } from './compart1.page';

const routes: Routes = [
  {
    path: '',
    component: Compart1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Compart1PageRoutingModule {}
