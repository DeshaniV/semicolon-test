import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-msgs',
  templateUrl: './error-msgs.component.html',
  styleUrls: ['./error-msgs.component.scss'],
})
export class ErrorMsgsComponent implements OnInit {
 @Input() message: string | undefined;
 @Input() field!: AbstractControl;
 @Input() error!: string;

  constructor() { }

  ngOnInit() {}

  showMessages() {
    return this.field?.touched && this.field?.errors?.[this.error];
  }

}
