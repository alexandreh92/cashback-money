import { createReducer } from 'reduxsauce';

import { IState, IActions, ISetPropAction } from './types';
import Creators, { OfferTypes as Types } from './creators';

export default Creators;

/* Initial State */

export const INITIAL_STATE: IState = {
  offers: [],
  current_page: 1,
  total_pages: 1,
  total_entries: 0,
  per_page: 30,
};

/* Reducers */

export const handleGetOffersSuccess = (
  state: IState,
  { offers, current_page, total_pages, total_entries, per_page }: ISetPropAction
): IState => ({
  ...state,
  offers: current_page === 1 ? offers : [...state.offers, ...offers],
  current_page,
  total_pages,
  total_entries,
  per_page,
});

/* Reducers to types */

export const reducer = createReducer<IState, IActions>(INITIAL_STATE, {
  [Types.GET_OFFERS_SUCCESS]: handleGetOffersSuccess,
});
