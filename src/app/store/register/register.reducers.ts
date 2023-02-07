import { createReducer, on } from "@ngrx/store";
import { AppInitialState } from "../app-initial-state";
import { RegisterState } from './register-state';
import { register, registerSuccess, registerFail } from './register.actions';

const initialState: RegisterState = AppInitialState.register;

const reducer = createReducer(initialState,
    on(register, state => {
        return {
            ...state,
            error: null,
            isRegistering: true,
            isRegistered: false
        };

    }),
    on(registerSuccess, state => {
        return {
            ...state,
            error: null,
            isRegistering: false,
            isRegistered: true
        };
    }),
    on(registerFail, (state, action) => {
        return {
            ...state,
            error: action.error,
            isRegistering: false,
            isRegistered: false
        };
    })
);

export function registerReducer(state: RegisterState, action: any) {
    return reducer(state, action);
}