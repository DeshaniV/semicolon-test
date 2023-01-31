import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSkillPageRoutingModule } from './add-skill-routing.module';

import { AddSkillPage } from './add-skill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSkillPageRoutingModule
  ],
  declarations: [AddSkillPage]
})
export class AddSkillPageModule {}
