import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginPageForm } from './login.page.form';
import { AppState } from '../../store/app-state';
import { Store } from '@ngrx/store';
import { show, hide } from '../../store/loading/loading.actions';
import { ToastController } from '@ionic/angular';
import { LoginState } from 'src/app/store/login/login-state';
import { AuthService } from '../../services/auth/auth.service';
import { recoverPassword, recoverPasswordSuccess, recoverPasswordFail, login, loginSuccess, loginFail } from '../../store/login/login.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  form!: FormGroup;
  loginPageSubscription!: Subscription;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private toastController: ToastController,
    private authService: AuthService) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
    this.loginPageSubscription = this.store.select('login').subscribe(loginState => {
      this.isRecoveringPassword(loginState);
      this.isPasswordRecovered(loginState);
      this.isLogingIn(loginState);
      this.isLoggedIn(loginState);
      this.onError(loginState);
      this.toggleLoading(loginState);
    })
  }

  private isRecoveringPassword(loginState: LoginState) {
    if (loginState.isRecoveringPassword) {
      this.toggleLoading(loginState);
      this.authService.recoverEmailPassword(this.form.get('email')?.value).subscribe((data) => {
        this.store.dispatch(recoverPasswordSuccess());
      }, (error) => {
        this.store.dispatch(recoverPasswordFail({ error }));
      });
    }
  }

  private async isPasswordRecovered(loginState: LoginState) {
    if (loginState.isRecoveredPassword) {
      this.toggleLoading(loginState);
      const toaster = await this.toastController.create({
        position: "bottom",
        message: "Recovery e-mail sent",
        color: "primary"
      });
      toaster.present();
    }
  }

  private async onError(loginState: LoginState) {
    if (loginState.error) {
      this.toggleLoading(loginState);
      const toaster = await this.toastController.create({
        position: "bottom",
        message: loginState.error.message,
        color: "danger"
      });
      toaster.present();
    }
  }

  private toggleLoading(loginState: LoginState) {
    (loginState.isLoggingIn || loginState.isRecoveringPassword) ?
      this.store.dispatch(show()) : this.store.dispatch(hide());
  }

  private isLogingIn(loginState: LoginState) {
    if (loginState.isLoggingIn) {
      this.toggleLoading(loginState);
      const email = this.form.get('email')?.value;
      const password = this.form.get('password')?.value;
      this.authService.login(email, password).subscribe(user => {
        this.store.dispatch(loginSuccess({ user }));
      }, error => {
        this.store.dispatch(loginFail({ error }));
      });
    }
  }

  private isLoggedIn(loginState: LoginState) {
    if (loginState.isLoggedin) {
      this.router.navigate(['home']);
    }
  }

  forgotEmailPassword() {
    this.store.dispatch(recoverPassword());
    // this.store.dispatch(show());
    // setTimeout(() => {
    //   this.store.dispatch(hide());
    // }, 3000);
  }

  login() {
    this.store.dispatch(login());
  }

  signUp() {
    setTimeout(() => {
      this.router.navigate(['sign-up']);
    }, 500)
  }

  ngOnDestroy(): void {
    if (this.loginPageSubscription) {
      this.loginPageSubscription.unsubscribe();
    }
  }
}
