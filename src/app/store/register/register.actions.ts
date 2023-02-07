import { createAction, props } from "@ngrx/store"
import { UserRegister } from '../../model/user/user-register';

export const register = createAction("[Register]", props<{ userRegister: UserRegister }>());
export const registerSuccess = createAction("[Register] success");
export const registerFail = createAction("[Register] fail", props<{ error: any }>());
