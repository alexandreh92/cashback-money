import { DefaultActionTypes, DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';
import { Role } from '~/@types';

/* Payloads */

export interface ISetPropAction extends AnyAction {
  email: string;
  password: string;
  token: string;
  roles: Role[];
}

/* Action Types */

export interface ITypes extends DefaultActionTypes {
  SIGN_IN_REQUEST: 'signInRequest';
  SIGN_IN_SUCCESS: 'signInSuccess';
  SIGN_OUT_REQUEST: 'signOutRequest';
  SIGN_UP_REQUEST: 'signUpRequest';
  SIGN_UP_SUCCESS: 'signUpSuccess';
}

/* Action Creators */

export interface ICreators extends DefaultActionCreators {
  signInRequest: (email: string, password: string) => ISetPropAction;
  signInSuccess: (
    id: number,
    name: string,
    email: string,
    token: string,
    roles: Role[]
  ) => ISetPropAction;
  signUpRequest: (
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ) => ISetPropAction;
  signUpSuccess: (
    id: number,
    name: string,
    email: string,
    token: string,
    roles: Role[]
  ) => ISetPropAction;
  signOutRequest: () => ISetPropAction;
}

export type IActions = ISetPropAction | AnyAction;

/* Redux State */

export interface IState {
  signedIn: boolean;
  token?: string;
}
