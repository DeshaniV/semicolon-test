import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ErrorMsgsComponent } from '../../components/error-msgs/error-msgs.component';
import { ErrorMsgsModule } from '../../components/error-msgs/error-msgs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    ErrorMsgsModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule { }
