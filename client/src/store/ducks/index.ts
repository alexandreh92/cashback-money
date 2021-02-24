import { combineReducers } from 'redux';

import { reducer as auth } from './auth';
import { reducer as offers } from './offers';
import { reducer as theme } from './theme';
import { reducer as toastr } from 'react-redux-toastr';
import { reducer as user } from './user';

export default combineReducers({
  auth,
  offers,
  theme,
  toastr,
  user,
});
