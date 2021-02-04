import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyhealthPageRoutingModule } from './myhealth-routing.module';

import { MyhealthPage } from './myhealth.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    MyhealthPageRoutingModule
  ],
  declarations: [MyhealthPage]
})
export class MyhealthPageModule {}
