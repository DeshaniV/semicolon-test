import { LoadingState } from './loading/loading-state';
import { LoginState } from './login/login-state';

export interface AppState {
    loading: LoadingState;
    login: LoginState;
} 