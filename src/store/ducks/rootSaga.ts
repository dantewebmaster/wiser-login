import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';
import { loginUserSaga } from './auth/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(AuthTypes.LOGIN_REQUEST, loginUserSaga)]);
}
