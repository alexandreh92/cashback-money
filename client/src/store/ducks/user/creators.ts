import { createActions } from 'reduxsauce';

import { ITypes, ICreators } from './types';

/* Types & Action Creators */

const { Types, Creators } = createActions<ITypes, ICreators>(
  {
    actionType: ['dataPassed'],
  },
  { prefix: '@user/' }
);

export const UserTypes = Types;
export default Creators;
