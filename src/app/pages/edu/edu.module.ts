import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EduPageRoutingModule } from './edu-routing.module';

import { EduPage } from './edu.page';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxYoutubePlayerModule.forRoot(),
    EduPageRoutingModule
  ],
  declarations: [EduPage]
})
export class EduPageModule {}
