import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as auth } from './auth';
import { reducer as backofficeOffers } from './backoffice/offers';
import { reducer as offers } from './offers';
import { reducer as theme } from './theme';
import { reducer as toastr } from 'react-redux-toastr';
import { reducer as user } from './user';

export default (history: any) =>
  combineReducers({
    auth,
    backofficeOffers,
    offers,
    router: connectRouter(history),
    theme,
    toastr,
    user,
  });
