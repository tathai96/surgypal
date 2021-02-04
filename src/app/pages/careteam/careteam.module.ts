import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CareteamPageRoutingModule } from './careteam-routing.module';

import { CareteamPage } from './careteam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CareteamPageRoutingModule
  ],
  declarations: [CareteamPage]
})
export class CareteamPageModule {}
