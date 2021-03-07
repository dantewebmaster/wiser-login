/**
 * Action Types
 */
export enum AuthTypes {
  LOGIN_REQUEST = '@auth/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@auth/LOGIN_FAILURE',
}

/**
 * State Types
 */
export interface AuthState {
  loading: boolean;
  error: string;
}
