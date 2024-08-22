import { useEffect, useState } from 'react';

import gamesApi from '../api/games-api';

export const useGetAllGames = () => {
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

export const useGetOneGames = (gameId) => {
  const [game, setGame] = useState({
    title: '',
    category: '',
    maxLevel: '',
    imageUrl: '',
    summary: '',
  });

  useEffect(() => {
    const response = async () => {
      const result = await gamesApi.getOne(gameId);
      setGame(result);
    };

    response();
  }, [gameId]);

  return [game, setGame];
};

export const useCreateGame = () => {
  const gameCreateHandler = (gameData) => gamesApi.create(gameData);

  return gameCreateHandler;
};
