import { LoadingState } from './loading/loading-state';
import { LoginState } from './login/login-state';
import { RegisterState } from './register/register-state';

export interface AppState {
    loading: LoadingState;
    login: LoginState;
    register: RegisterState;
} 