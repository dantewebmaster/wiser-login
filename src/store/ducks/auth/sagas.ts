import { call, put, SagaReturnType } from 'redux-saga/effects';
import { AuthToken } from '../../../services/auth_token';

import api from '../../../services/api';
import {
  loginSuccessAction,
  loginFailureAction,
  loginRequestAction,
} from './actions';

function login(email, password) {
  return api.post('/login', { email, password });
}

export interface LoginPayload {
  email: string;
  password: string;
}

export function* loginUserSaga({
  payload,
}: SagaReturnType<typeof loginRequestAction>) {
  try {
    console.log(payload);
    const response = yield call(() =>
      login(payload.data.email, payload.data.password)
    );

    // yield call(() => saveCookie('access_token', response.data.access_token));
    yield call(() => AuthToken.storeToken(response.data.access_token));

    yield put(loginSuccessAction(response));
  } catch (error) {
    yield put(loginFailureAction(error));
  }
}
