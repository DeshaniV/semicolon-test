import { AppState } from './app-state';

export const AppInitialState: AppState = {
    loading: {
        show: false
    },
    login: {
        error: null,
        isRecoveringPassword: false,
        isRecoveredPassword: false,
        isLoggedin: false,
        isLoggingIn: false
    },
    register: {
        error: null,
        isRegistering: false,
        isRegistered: false
    }
}