import { DefaultActionTypes, DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';

import { Offer } from '~/@types';

/* Payloads */

export interface ISetPropAction extends AnyAction {
  offers: Offer[];
  current_page: number;
  total_pages: number;
  total_entries: number;
  per_page: number;
  search: string;
}

/* Action Types */

export interface ITypes extends DefaultActionTypes {
  GET_OFFERS_REQUEST: 'getOffersRequest';
  GET_OFFERS_SUCCESS: 'getOffersSuccess';
  GET_OFFERS_NEXT_PAGE: 'getOffersNextPage';
}

/* Action Creators */

export interface ICreators extends DefaultActionCreators {
  getOffersRequest: (search?: string, page?: number) => ISetPropAction;
  getOffersSuccess: (
    offers: Offer[],
    current_page: number,
    total_pages: number,
    total_entries: number,
    per_page: number
  ) => ISetPropAction;
}

export type IActions = ISetPropAction | AnyAction;

/* Redux State */

export interface IState {
  offers: Offer[];
  current_page: number;
  total_pages: number;
  total_entries: number;
  per_page: number;
}
