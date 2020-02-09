import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpotItemPageRoutingModule } from './spot-item-routing.module';

import { SpotItemPage } from './spot-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpotItemPageRoutingModule
  ],
  declarations: [SpotItemPage]
})
export class SpotItemPageModule {}
