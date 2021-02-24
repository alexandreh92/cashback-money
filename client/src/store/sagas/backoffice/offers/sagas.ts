import { takeLatest } from 'redux-saga/effects';

import { BackofficeOfferTypes } from '~/store/ducks/backoffice/offers/creators';
import { getOffers, toggleStatus } from '.';

const sagas = [
  takeLatest(BackofficeOfferTypes.GET_OFFERS_REQUEST, getOffers),
  takeLatest(BackofficeOfferTypes.TOGGLE_STATUS_REQUEST, toggleStatus),
];

export default sagas;
