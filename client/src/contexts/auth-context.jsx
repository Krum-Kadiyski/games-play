import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({
  userId: '',
  email: '',
  accessToken: '',
  isAutenticated: false,
  // eslint-disable-next-line no-unused-vars
  changeAuthState: (authState = {}) => null,
});

export const AuthContextProvider = (props) => {
  const [authState, setAuthState] = useState({});

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
