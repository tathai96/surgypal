import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CareteamPage } from './careteam.page';

const routes: Routes = [
  {
    path: '',
    component: CareteamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareteamPageRoutingModule {}
