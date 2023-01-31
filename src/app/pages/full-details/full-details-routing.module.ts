import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullDetailsPage } from './full-details.page';

const routes: Routes = [
  {
    path: '',
    component: FullDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullDetailsPageRoutingModule {}
