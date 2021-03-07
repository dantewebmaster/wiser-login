import Cookie from 'js-cookie';
import Router from 'next/router';

export const TOKEN_STORAGE_KEY = 'auth_token';

export class AuthToken {
  static async getToken() {
    Cookie.get(TOKEN_STORAGE_KEY);
  }

  static async storeToken(token: string) {
    Cookie.set(TOKEN_STORAGE_KEY, token);

    await Router.push('/');
  }
}
