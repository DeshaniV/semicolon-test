import { createReducer, on } from "@ngrx/store";
import { show, hide } from './loading.actions';
import { LoadingState } from './loading-state';
import { AppInitialState } from "../app-initial-state";

const initialState : LoadingState = AppInitialState.loading;

const reducer = createReducer(initialState,
    on(show, () => {
       return {show: true}; 
    }),
    on(hide, () => {
        return {show: false}; 
     })
    );

export function loadingReducer(state: LoadingState, action:any) {
return reducer(state, action);
}