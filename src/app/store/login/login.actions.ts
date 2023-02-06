import { createAction, props } from "@ngrx/store"
import { User } from "src/app/model/user/user";

export const recoverPassword = createAction("[Recover Password]");
export const recoverPasswordSuccess = createAction("[Recover Password] success");
export const recoverPasswordFail = createAction("[Recover Password] fail", props<{ error: any }>());

export const login = createAction("[Login]");
export const loginSuccess = createAction("[Login] success", props<{ user: User }>());
export const loginFail = createAction("[Login] fail", props<{ error: any }>());