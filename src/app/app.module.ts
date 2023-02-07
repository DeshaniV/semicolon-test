import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { AngularFireModule } from "@angular/fire/compat";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormControlPipe } from './pipes/form-control.pipe';
import { StoreModule } from '@ngrx/store'
import { AppStoreModule } from './store/app-store-module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoadingComponent } from './components/loading/loading.component';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './guards/auth/auth-guard'
import { ErrorMsgsModule } from './components/error-msgs/error-msgs.module';

@NgModule({
  declarations: [AppComponent, FormControlPipe, LoadingComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ErrorMsgsModule,
  AngularFireModule.initializeApp(environment.firebaseConfig), 
  ...AppStoreModule, StoreDevtoolsModule.instrument({maxAge: 25})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
