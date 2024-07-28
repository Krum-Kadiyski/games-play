import { useEffect, useState } from 'react';

import gamesApi from '../api/games-api';

const useGetAllGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const response = async () => {
      const result = await gamesApi.getAll();
      setGames(result);
    };

    response();
  }, []);

  return [games, setGames];
};

export default useGetAllGames;
