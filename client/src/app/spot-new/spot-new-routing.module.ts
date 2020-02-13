import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpotNewPage } from './spot-new.page';

const routes: Routes = [
  {
    path: '',
    component: SpotNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpotNewPageRoutingModule {}
