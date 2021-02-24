import { DefaultActionTypes, DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';

import { BackofficeOffer } from '~/@types';

/* Payloads */

export interface ISetPropAction extends AnyAction {
  offers: BackofficeOffer[];
  current_page: number;
  total_pages: number;
  total_entries: number;
  per_page: number;
  search: string;
  offer: BackofficeOffer;
  id: number;
}

/* Action Types */

export interface ITypes extends DefaultActionTypes {
  GET_OFFERS_REQUEST: 'getOffersRequest';
  GET_OFFERS_SUCCESS: 'getOffersSuccess';
  GET_OFFERS_NEXT_PAGE: 'getOffersNextPage';
  TOGGLE_STATUS_REQUEST: 'toggleStatusRequest';
  TOGGLE_STATUS_SUCCESS: 'toggleStatusSuccess';
}

/* Action Creators */

export interface ICreators extends DefaultActionCreators {
  getOffersRequest: (search?: string, page?: number) => ISetPropAction;
  getOffersSuccess: (
    offers: BackofficeOffer[],
    current_page: number,
    total_pages: number,
    total_entries: number,
    per_page: number
  ) => ISetPropAction;
  toggleStatusRequest: (id: number) => ISetPropAction;
  toggleStatusSuccess: (offer: BackofficeOffer) => ISetPropAction;
}

export type IActions = ISetPropAction | AnyAction;

/* Redux State */

export interface IState {
  offers: BackofficeOffer[];
  current_page: number;
  total_pages: number;
  total_entries: number;
  per_page: number;
}
