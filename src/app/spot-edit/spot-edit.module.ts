import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpotEditPageRoutingModule } from './spot-edit-routing.module';

import { SpotEditPage } from './spot-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SpotEditPageRoutingModule
  ],
  declarations: [SpotEditPage]
})
export class SpotEditPageModule {}
