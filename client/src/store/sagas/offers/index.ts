import { call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { toastr } from 'react-redux-toastr';

import { ISetPropAction } from '~/store/ducks/offers/types';
import OffersActions from '~/store/ducks/offers';

import api from '~/services/api';

const { getOffersSuccess } = OffersActions;

export function* getOffers({ search, page = 1 }: ISetPropAction): SagaIterator {
  try {
    const res = yield call(api.get, '/offers', {
      params: { search, page: page },
    });

    const {
      offers,
      current_page,
      total_pages,
      total_entries,
      per_page,
    } = res.data;

    yield put(
      getOffersSuccess(
        offers,
        current_page,
        total_pages,
        total_entries,
        per_page
      )
    );
  } catch (err) {
    toastr.error('Error', 'Connection failed.');

    console.log(err.response);
  }
}
