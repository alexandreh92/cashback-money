import { takeLatest } from 'redux-saga/effects';

import { BackofficeOfferTypes } from '~/store/ducks/backoffice/offers/creators';
import { getOffers, toggleStatus, createOffer, updateOffer } from '.';

const sagas = [
  takeLatest(BackofficeOfferTypes.GET_OFFERS_REQUEST, getOffers),
  takeLatest(BackofficeOfferTypes.TOGGLE_STATUS_REQUEST, toggleStatus),
  takeLatest(BackofficeOfferTypes.CREATE_OFFER_REQUEST, createOffer),
  takeLatest(BackofficeOfferTypes.UPDATE_OFFER_REQUEST, updateOffer),
];

export default sagas;
