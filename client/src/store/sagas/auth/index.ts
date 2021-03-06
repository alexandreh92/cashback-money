import { call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { toastr } from 'react-redux-toastr';

import { ISetPropAction } from '~/store/ducks/auth/types';
import AuthActions from '~/store/ducks/auth';

import api from '~/services/api';

export function* signIn({ email, password }: ISetPropAction): SagaIterator {
  const { signInSuccess } = AuthActions;

  try {
    const res = yield call(api.post, '/sessions', { email, password });

    const { name, id, roles } = res.data;

    const token = res.headers.authorization.replace('Bearer ', '');

    yield put(signInSuccess(id, name, email, token, roles));
    toastr.success('Successful', 'You are logged in.');
  } catch (err) {
    if (err.response?.status === 401) {
      toastr.error('Error', 'Some information is wrong.');
    } else {
      toastr.error('Error', 'Connection failed.');
    }
    console.log(err);
  }
}

export function* signUp({
  name,
  email,
  password,
  password_confirmation,
}: ISetPropAction): SagaIterator {
  const { signUpSuccess } = AuthActions;

  try {
    const res = yield call(api.post, 'registrations', {
      name,
      email,
      password,
      password_confirmation,
    });

    const { id, roles } = res.data;

    const token = res.headers.authorization.replace('Bearer ', '');

    yield put(signUpSuccess(id, name, email, token, roles));
    toastr.success('Successful', 'You are registered and logged in.');
  } catch (err) {
    if (err.response?.status === 401) {
      toastr.error('Error', 'Some information is wrong.');
    } else {
      toastr.error('Error', 'Connection failed.');
    }
    console.log(err.response);
  }
}
