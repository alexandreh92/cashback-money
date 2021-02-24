import { createReducer } from 'reduxsauce';

import { IState, IActions } from './types';
import Creators from './creators';

import { AuthTypes } from '~/store/ducks/auth/creators';
import { ISetPropAction as AuthPropActions } from '~/store/ducks/auth/types';

export default Creators;

/* Initial State */

export const INITIAL_STATE: IState = {
  id: undefined,
  name: '',
  email: '',
  roles: [],
};

/* Reducers */

export const handleSignInSuccess = (
  state: IState,
  { name, email, id, roles }: AuthPropActions
): IState => ({ ...state, name, email, id, roles });

/* Reducers to types */

export const reducer = createReducer<IState, IActions>(INITIAL_STATE, {
  [AuthTypes.SIGN_IN_SUCCESS]: handleSignInSuccess,
  [AuthTypes.SIGN_UP_SUCCESS]: handleSignInSuccess,
});
