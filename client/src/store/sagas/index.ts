import { all, AllEffect, ForkEffect } from 'redux-saga/effects';

/* Sagas */

import AuthSagas from './auth/sagas';
import OffersSagas from './offers/sagas';
import BackofficeOffersSagas from './backoffice/offers/sagas';

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<never>>,
  any,
  unknown
> {
  return yield all([...AuthSagas, ...BackofficeOffersSagas, ...OffersSagas]);
}
