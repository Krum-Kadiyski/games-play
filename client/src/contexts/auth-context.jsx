import { createContext, useContext } from 'react';
import usePersistedState from '../hooks/usePersistedState';

export const AuthContext = createContext({
  userId: '',
  email: '',
  accessToken: '',
  isAutenticated: false,
  // eslint-disable-next-line no-unused-vars
  changeAuthState: (authState = {}) => null,
});

export const AuthContextProvider = (props) => {
  const [authState, setAuthState] = usePersistedState('auth', {});

  const changeAuthState = (state) => {
    localStorage.setItem('accessToken', state.accessToken);
    setAuthState(state);
  };

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authData = useContext(AuthContext);

  return authData;
};
