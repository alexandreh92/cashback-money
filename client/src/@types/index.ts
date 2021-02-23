import { IState as AuthState } from '~/store/ducks/auth/types';
import { IState as ThemeState } from '~/store/ducks/theme/types';
import { IState as UserState } from '~/store/ducks/user/types';
import { ToastrState } from 'react-redux-toastr';
import { lightTheme } from '~/styles/theme';

export type Theme = typeof lightTheme;

export interface ApplicationState {
  auth: AuthState;
  theme: ThemeState;
  toastr: ToastrState;
  user: UserState;
}

export interface User {
  name: string;
  email: string;
  roles: string[];
}
