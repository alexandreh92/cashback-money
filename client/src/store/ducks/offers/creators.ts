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
  },
  { prefix: '@offers/' }
);

export const OfferTypes = Types;
export default Creators;
