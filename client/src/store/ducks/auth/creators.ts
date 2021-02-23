import { createActions } from 'reduxsauce';

import { ITypes, ICreators } from './types';

/* Types & Action Creators */

const { Types, Creators } = createActions<ITypes, ICreators>(
  {
    signInRequest: ['email', 'password'],
    signInSuccess: ['id', 'token', 'name', 'email'],
    signUpRequest: ['name', 'email', 'password', 'password_confirmation'],
    signUpSuccess: ['id', 'name', 'email', 'token'],
    signOutRequest: null,
  },
  { prefix: '@auth/' }
);

export const AuthTypes = Types;
export default Creators;
