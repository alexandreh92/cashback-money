import { IState as AuthState } from '~/store/ducks/auth/types';
import { IState as OffersState } from '~/store/ducks/offers/types';
import { IState as BackofficeOffersState } from '~/store/ducks/backoffice/offers/types';
import { IState as ThemeState } from '~/store/ducks/theme/types';
import { IState as UserState } from '~/store/ducks/user/types';
import { ToastrState } from 'react-redux-toastr';
import { lightTheme } from '~/styles/theme';

export type Theme = typeof lightTheme;

export interface ApplicationState {
  auth: AuthState;
  backofficeOffers: BackofficeOffersState;
  offers: OffersState;
  theme: ThemeState;
  toastr: ToastrState;
  user: UserState;
}

export interface User {
  name: string;
  email: string;
  roles: string[];
}

export interface PaginatedResponse {
  per_page: number;
  total_pages: number;
  current_page: number;
  total_entries: number;
}

export interface Offer {
  id: number;
  advertiser_name: string;
  url: string;
  description: string;
  starts_at: string;
  ends_at?: string;
  premium: boolean;
  enabled: boolean;
  created_at: string;
  updated_at: string;
}

export interface Role {
  id: number;
  name: string;
  resource_type?: string;
  resource_id?: number;
  created_at: string;
  updated_at: string;
}

export interface OffersResponse extends PaginatedResponse {
  offers: Offer[];
}

export interface BackofficeOffer extends Offer {
  status: boolean;
}
