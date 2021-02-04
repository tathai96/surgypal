import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    ToastrModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
