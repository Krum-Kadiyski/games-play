import { useContext } from 'react';

import { login, register } from '../api/auth-api';
import { AuthContext } from '../contexts/auth-context';

export const useLogin = () => {
  const { changeAuthState } = useContext(AuthContext);

  const loginHandler = async (email, password) => {
    const result = await login(email, password);

    changeAuthState(result);

    return result;
  };

  return loginHandler;
};

export const useRegister = () => {
  const { changeAuthState } = useContext(AuthContext);

  const registerhandler = async (email, password) => {
    const result = await register(email, password);

    changeAuthState(result);

    return result;
  };

  return registerhandler;
};
