import { action } from 'typesafe-actions';
import { LoginPayload } from './sagas';
import { AuthTypes } from './types';

export const loginRequestAction = (data: LoginPayload) =>
  action(AuthTypes.LOGIN_REQUEST, { data });

export const loginSuccessAction = (data: any) =>
  action(AuthTypes.LOGIN_SUCCESS, { data });

export const loginFailureAction = (error: Error) =>
  action(AuthTypes.LOGIN_FAILURE, { error });
