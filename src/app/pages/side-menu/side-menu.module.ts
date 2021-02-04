import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SideMenuPageRoutingModule } from './side-menu-routing.module';

import { SideMenuPage } from './side-menu.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    ChartsModule,
    SideMenuPageRoutingModule,
  ],
  declarations: [SideMenuPage]
})
export class SideMenuPageModule {}
