import { useEffect, useReducer } from 'react';
import commentsApi from '../api/comments-api';

export const useCreateComment = () => {
  const createHandler = (gameId, comment) =>
    commentsApi.create(gameId, comment);

  return createHandler;
};

const commentsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALL':
      return action.payload.slice();

    case 'ADD_COMMENT':
      return [...state, action.payload]
 
    default:
      return state;
  }
};

export const useGetAllComments = (gameId) => {
  const [comments, dispatch] = useReducer(commentsReducer, []);

  useEffect(() => {
    const request = async () => {
      const result = await commentsApi.getAll(gameId);

      dispatch({ type: 'GET_ALL', payload: result });
    };

    request();
  }, [gameId]);

  return [comments, dispatch];
};
