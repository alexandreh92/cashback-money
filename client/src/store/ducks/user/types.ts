import { DefaultActionTypes, DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';
import { Role } from '~/@types';

/* Payloads */

export interface ISetPropAction extends AnyAction {
  prop: string;
}

/* Action Types */

export interface ITypes extends DefaultActionTypes {
  SET_PROP: 'setProp';
}

/* Action Creators */

export interface ICreators extends DefaultActionCreators {
  setProp: (prop: string) => ISetPropAction;
}

export type IActions = ISetPropAction | AnyAction;

/* Redux State */

export interface IState {
  id?: number;
  name: string;
  email: string;
  roles: Role[];
}
