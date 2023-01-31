import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormControlPipe } from './pipes/form-control.pipe';
import { StoreModule } from '@ngrx/store'
import { AppStoreModule } from './store/app-store-module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, FormControlPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  ...AppStoreModule, StoreDevtoolsModule.instrument({maxAge: 25})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
