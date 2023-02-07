import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPageForm } from './form/register.page.form';
import { FormBuilder } from '@angular/forms';
import { AppState } from '../../store/app-state';
import { Store } from '@ngrx/store';
import { register } from 'src/app/store/register/register.actions';
import { hide, show } from 'src/app/store/loading/loading.actions';
import { ToastController } from '@ionic/angular';
import { login } from 'src/app/store/login/login.actions';
import { RegisterState } from '../../store/register/register-state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {

  registerForm: RegisterPageForm;
  registerPageSubscription!: Subscription;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private toastController: ToastController) { }

  ngOnInit() {
    this.createForm();
    this.watchRegisterState();
  }

  register() {
    this.registerForm.getForm().markAllAsTouched();
    if (this.registerForm.getForm().valid) {
      this.store.dispatch(register({ userRegister: this.registerForm.getForm().value }));
    }
  }

  private createForm() {
    this.registerForm = new RegisterPageForm(this.formBuilder);
  }

  private watchRegisterState() {
    this.registerPageSubscription = this.store.select('register').subscribe(state => {
      this.toggleLoading(state);
      this.onRegistered(state);
      this.onError(state);
    })
  }

  private onRegistered(state: RegisterState) {
    if (state.isRegistered) {
      this.store.dispatch(login({
        email: this.registerForm.getForm().value.email,
        password: this.registerForm.getForm().value.password
      }))
      // setTimeout(() => {
      //   this.router.navigate(['home']);
      // }, 500)
    }
  }

  private onError(state: RegisterState) {
    if (state.error) {
      this.toastController.create({
        position: "bottom",
        message: state.error.message,
        color: "danger",
        header: "Registration not completed",
        duration: 3000
      }).then(toast => toast.present());
    }
  }

  private toggleLoading(state: RegisterState) {
    state.isRegistering ?
      this.store.dispatch(show()) : this.store.dispatch(hide());
  }

  ngOnDestroy(): void {
    if (this.registerPageSubscription) {
      this.registerPageSubscription.unsubscribe();
    }
  }
}
