import { call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { toastr } from 'react-redux-toastr';

import { ISetPropAction } from '~/store/ducks/backoffice/offers/types';
import BackofficeOffersActions from '~/store/ducks/backoffice/offers';

import api from '~/services/api';
import history from '~/services/history';

const {
  getOffersSuccess,
  toggleStatusSuccess,
  createOfferSuccess,
} = BackofficeOffersActions;

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

export function* createOffer({ values }: ISetPropAction): SagaIterator {
  try {
    const res = yield call(api.post, '/backoffice/offers', {
      ...values,
    });

    const { offer, message } = res.data;

    yield put(createOfferSuccess(offer));
    toastr.success('Succes', message);
    history.push('/backoffice/offers');
  } catch (err) {
    if (err.response?.status === 400) {
      toastr.error('Error', err.response?.data?.errors[0]);
    } else {
      console.log(err.response);
      toastr.error('Error', 'Connection failed.');
    }
  }
}

export function* updateOffer({ values, id }: ISetPropAction): SagaIterator {
  try {
    const res = yield call(api.patch, `/backoffice/offers/${id}`, {
      ...values,
    });

    const { offer, message } = res.data;

    yield put(createOfferSuccess(offer));
    toastr.success('Succes', message);
    history.push('/backoffice/offers');
  } catch (err) {
    if (err.response?.status === 400) {
      toastr.error('Error', err.response?.data?.message);
    } else {
      console.log(err.response);
      toastr.error('Error', 'Connection failed.');
    }
  }
}
