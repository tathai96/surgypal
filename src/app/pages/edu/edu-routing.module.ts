import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EduPage } from './edu.page';

const routes: Routes = [
  {
    path: '',
    component: EduPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EduPageRoutingModule {}
