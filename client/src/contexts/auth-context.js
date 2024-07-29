import { createContext } from 'react';

export const AuthContext = createContext({
  userId: '',
  email: '',
  accessToken: '',
  isAutenticated: false,
  // eslint-disable-next-line no-unused-vars
  changeAuthState: (authState = {}) => null,
});
