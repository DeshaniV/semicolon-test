import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgsComponent } from './error-msgs.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ErrorMsgsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [ErrorMsgsComponent]
})
export class ErrorMsgsModule { }
