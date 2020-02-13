import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpotNewPageRoutingModule } from './spot-new-routing.module';

import { SpotNewPage } from './spot-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SpotNewPageRoutingModule
  ],
  declarations: [SpotNewPage]
})
export class SpotNewPageModule {}
