import { createReducer } from 'reduxsauce';

import Creators, { AuthTypes as Types } from './creators';
import { IState, IActions, ISetPropAction } from './types';

export default Creators;

/* Initial State */

export const INITIAL_STATE: IState = {
  signedIn: false,
  token: undefined,
};

/* Reducers */

export const handleSignInSuccess = (
  state: IState,
  { token }: ISetPropAction
): IState => ({ ...state, signedIn: true, token });

export const handleSignOut = (state: IState): IState => ({
  ...state,
  ...INITIAL_STATE,
});

/* Reducers to types */

export const reducer = createReducer<IState, IActions>(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: handleSignInSuccess,
  [Types.SIGN_UP_SUCCESS]: handleSignInSuccess,
  [Types.SIGN_OUT_REQUEST]: handleSignOut,
});
