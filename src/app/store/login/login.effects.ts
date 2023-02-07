import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { recoverPassword, recoverPasswordSuccess, recoverPasswordFail, login, loginSuccess, loginFail } from './login.actions';
import { AuthService } from '../../services/auth/auth.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class LoginEffects {
    constructor(private actions$: Actions,
        private authService: AuthService) { }

    recoverPassword$ = createEffect(() => this.actions$.pipe(
        ofType(recoverPassword),
        switchMap((payload: { email: string }) => this.authService.recoverEmailPassword(payload.email).pipe(
            map(() => recoverPasswordSuccess()),
            catchError(error => of(recoverPasswordFail({ error })))
        ))
    ));

    login$ = createEffect(() => this.actions$.pipe(
        ofType(login),
        switchMap((payload: { email: string, password: string }) => this.authService.login(payload.email, payload.password).pipe(
            map(user => loginSuccess({ user })),
            catchError(error => of(loginFail({ error })))
        ))
    ));

}