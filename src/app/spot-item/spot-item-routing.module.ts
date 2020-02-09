import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpotItemPage } from './spot-item.page';

const routes: Routes = [
  {
    path: '',
    component: SpotItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpotItemPageRoutingModule {}
