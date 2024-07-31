import { Routes, Route } from 'react-router-dom';

import { AuthContextProvider } from './contexts/auth-context';

import Header from './components/header/header';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import GameList from './components/game-list/game-list';
import GameCreate from './components/game-create/game-create';
import GameDetails from './components/game-details/game-details';
import Logout from './components/logout/logout';

function App() {
  return (
    <AuthContextProvider>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/games" element={<GameList />} />
            <Route path="/games/:gameId/details" element={<GameDetails />} />
            <Route path="/games/create" element={<GameCreate />} />
          </Routes>
        </main>
      </div>
    </AuthContextProvider>
  );
}

export default App;
