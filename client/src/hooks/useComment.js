import { useEffect, useState } from 'react';
import  commentsApi  from '../api/comments-api';

export const useCreateComment = () => {
  const createHandler = (gameId, comment) =>
    commentsApi.create(gameId, comment);

  return createHandler;
};

export const useGetAllComments = (gameId) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const request = async () => {
      const result = await commentsApi.getAll(gameId);

      setComments(result);
    };

    request();
  }, [gameId]);
  return [comments, setComments];
};
