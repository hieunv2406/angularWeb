import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAuth from '../store/reduces/auth.reducer';

export interface AppState {
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [debug]
  : [];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
