import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesPage } from './messages.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MessagesPage,
    children: [
      {
        path: 'unread',
        loadChildren: () => import('../unread/unread.module').then( m => m.UnreadPageModule) 
      },
      {
        path: 'read',
        loadChildren: () => import('../read/read.module').then( m => m.ReadPageModule) 
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/unread',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesPageRoutingModule {}
