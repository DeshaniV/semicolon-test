import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth/auth.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { registerSuccess, registerFail, register } from './register.actions';
import { UserRegister } from '../../model/user/user-register';

@Injectable()
export class RegisterEffects {
    constructor(private actions$: Actions,
        private authService: AuthService) { }

    register$ = createEffect(() => this.actions$.pipe(
        ofType(register),
        switchMap((payload: { userRegister: UserRegister }) => this.authService.register(payload.userRegister).pipe(
            map(() => registerSuccess()),
            catchError(error => of(registerFail({ error })))
        ))
    ));
}