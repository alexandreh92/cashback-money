import { takeLatest } from 'redux-saga/effects';

import { OfferTypes } from '~/store/ducks/offers/creators';
import { getOffers } from '.';

const sagas = [takeLatest(OfferTypes.GET_OFFERS_REQUEST, getOffers)];

export default sagas;
