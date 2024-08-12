import { login, register, logout } from '../api/auth-api';
import { useAuthContext } from '../contexts/auth-context';

export const useLogin = () => {
  const { changeAuthState } = useAuthContext();

  const loginHandler = async (email, password) => {
    const { password: _, ...authData } = await login(email, password);

    changeAuthState(authData);

    return authData;
  };

  return loginHandler;
};

export const useRegister = () => {
  const { changeAuthState } = useAuthContext();

  const registerhandler = async (email, password) => {
    const { password: _, ...authData } = await register(email, password);

    changeAuthState(authData);

    return authData;
  };

  return registerhandler;
};

export const useLogout = () => {
  const { logout: localLogout } = useAuthContext();

  const logoutHandler = async () => {
    localLogout();
    await logout();
  };

  return logoutHandler;
};
