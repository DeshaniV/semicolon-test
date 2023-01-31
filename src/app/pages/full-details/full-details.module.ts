import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullDetailsPageRoutingModule } from './full-details-routing.module';

import { FullDetailsPage } from './full-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullDetailsPageRoutingModule
  ],
  declarations: [FullDetailsPage]
})
export class FullDetailsPageModule {}
