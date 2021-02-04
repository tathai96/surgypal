import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideMenuPage } from './side-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SideMenuPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../messages/messages.module').then( m => m.MessagesPageModule)
      },
      {
        path: 'performance',
        loadChildren: () => import('../performance/performance.module').then( m => m.PerformancePageModule)
      },
      {
        path: 'edu',
        loadChildren: () => import('../edu/edu.module').then( m => m.EduPageModule)
      },
      {
        path: 'myhealth',
        loadChildren: () => import('../myhealth/myhealth.module').then( m => m.MyhealthPageModule)
      },
      {
        path: 'care',
        loadChildren: () => import('../careteam/careteam.module').then( m => m.CareteamPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideMenuPageRoutingModule {}
