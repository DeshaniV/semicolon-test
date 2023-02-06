import { createReducer, on } from "@ngrx/store";
import { LoginState } from './login-state';
import { recoverPassword, recoverPasswordSuccess, recoverPasswordFail, login, loginSuccess, loginFail } from './login.actions';
import { AppInitialState } from "../app-initial-state";

const initialState: LoginState = AppInitialState.login;

const reducer = createReducer(initialState,
    on(recoverPassword, currentState => {
        return {
            ...currentState,
            error: null,
            isRecoveringPassword: true,
            isRecoveredPassword: false
        };

    }),
    on(recoverPasswordSuccess, currentState => {
        return {
            ...currentState,
            error: null,
            isRecoveringPassword: false,
            isRecoveredPassword: true
        };
    }),
    on(recoverPasswordFail, (currentState, action) => {
        return {
            ...currentState,
            error: action.error,
            isRecoveringPassword: false,
            isRecoveredPassword: false
        };
    }),
    on(login, currentState => {
        return {
            ...currentState,
            error: null,
            isLoggedin: false,
            isLoggingIn: true
        };
    }),
    on(loginSuccess, currentState => {
        return {
            ...currentState,
            error: null,
            isLoggedin: true,
            isLoggingIn: false
        };
    }),
    on(loginFail, (currentState, action) => {
        return {
            ...currentState,
            error: action.error,
            isLoggedin: false,
            isLoggingIn: false
        };
    })
);

export function loginReducer(state: LoginState, action: any) {
    return reducer(state, action);
}