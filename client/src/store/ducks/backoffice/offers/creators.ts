import { createActions } from 'reduxsauce';

import { ITypes, ICreators } from './types';

/* Types & Action Creators */

const { Types, Creators } = createActions<ITypes, ICreators>(
  {
    getOffersRequest: ['search', 'page'],
    getOffersSuccess: [
      'offers',
      'current_page',
      'total_pages',
      'total_entries',
      'per_page',
    ],
    toggleStatusRequest: ['id'],
    toggleStatusSuccess: ['offer'],
    createOfferRequest: ['values'],
    createOfferSuccess: ['offer'],
    updateOfferRequest: ['values', 'id'],
    updateOfferSuccess: ['offer'],
  },
  { prefix: '@backofficeOffers/' }
);

export const BackofficeOfferTypes = Types;
export default Creators;
