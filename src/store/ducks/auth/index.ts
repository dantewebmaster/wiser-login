import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  loading: false,
  error: '',
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case AuthTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case AuthTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    default:
      return state;
  }
};

export default reducer;
