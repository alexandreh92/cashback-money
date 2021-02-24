import { createActions } from 'reduxsauce';

import { ITypes, ICreators } from './types';

/* Types & Action Creators */

const { Types, Creators } = createActions<ITypes, ICreators>(
  {
    signInRequest: ['email', 'password'],
    signInSuccess: ['id', 'name', 'email', 'token', 'roles'],
    signUpRequest: ['name', 'email', 'password', 'password_confirmation'],
    signUpSuccess: ['id', 'name', 'email', 'token', 'roles'],
    signOutRequest: null,
  },
  { prefix: '@auth/' }
);

export const AuthTypes = Types;
export default Creators;
