import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagesPageRoutingModule } from './messages-routing.module';

import { MessagesPage } from './messages.page';
import { UnreadPageModule } from '../unread/unread.module';
import { ReadPageModule } from '../read/read.module';
import { UnreadPage } from '../unread/unread.page';
import { ReadPage } from '../read/read.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    MessagesPageRoutingModule
  ],
  declarations: [MessagesPage]
})
export class MessagesPageModule {}
