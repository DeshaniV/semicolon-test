import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-msgs',
  templateUrl: './error-msgs.component.html',
  styleUrls: ['./error-msgs.component.scss'],
})
export class ErrorMsgsComponent implements OnInit {
 @Input() message: string | undefined;
 @Input() field!: FormGroup;
 @Input() error!: string;

  constructor() { }

  ngOnInit() {}

  showMessages() {
    return this.field.touched && this.field.errors?.[this.error];
  }

}
