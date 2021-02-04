import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformancePageRoutingModule } from './performance-routing.module';

import { PerformancePage } from './performance.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    IonicModule,
    PerformancePageRoutingModule
  ],
  declarations: [PerformancePage]
})
export class PerformancePageModule {}
