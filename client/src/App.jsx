import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import GameList from './components/game-list/game-list';
import GameCreate from './components/game-create/game-create';
import GameDetails from './components/game-details/game-details';
import { AuthContext } from './contexts/auth-context';

function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    localStorage.setItem('accessToken', state.accessToken)
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
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/games" element={<GameList />} />
            <Route path="/games/:gameId/details" element={<GameDetails />} />
            <Route path="/games/create" element={<GameCreate />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
