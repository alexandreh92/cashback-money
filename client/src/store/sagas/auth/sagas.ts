import { takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '~/store/ducks/auth/creators';
import { signIn, signUp } from '.';

const sagas = [
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
];

export default sagas;
