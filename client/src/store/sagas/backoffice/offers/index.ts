import { call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { toastr } from 'react-redux-toastr';

import { ISetPropAction } from '~/store/ducks/offers/types';
import BackofficeOffersActions from '~/store/ducks/backoffice/offers';

import api from '~/services/api';

const { getOffersSuccess, toggleStatusSuccess } = BackofficeOffersActions;

export function* getOffers({ search, page = 1 }: ISetPropAction): SagaIterator {
  try {
    const res = yield call(api.get, '/backoffice/offers', {
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

export function* toggleStatus({ id }: ISetPropAction): SagaIterator {
  try {
    const res = yield call(api.post, '/backoffice/offers/toggle_status', {
      id,
    });

    const offer = res.data;

    yield put(toggleStatusSuccess(offer));
  } catch (err) {
    toastr.error('Error', 'Connection failed.');

    console.log(err.response);
  }
}
