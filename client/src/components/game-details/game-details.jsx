import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetOneGames } from '../../hooks/useGames';
import useForm from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/auth-context';
import { useGetAllComments, useCreateComment } from '../../hooks/useComment';
import gamesApi from '../../api/games-api';

const initialValues = {
  comment: '',
};

const GameDetails = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [comments, dispatch] = useGetAllComments(gameId);
  const createComment = useCreateComment();
  const { email, userId } = useAuthContext();
  const [game] = useGetOneGames(gameId);
  const { isAuthenticated } = useAuthContext();
  const { changeHandler, submitHandler, values } = useForm(
    initialValues,
    async ({ comment }) => {
      try {
        const newComment = await createComment(gameId, comment);

        // setComment((prevComments) => [...prevComments, newComment]);
        dispatch({
          type: 'ADD_COMMENT',
          payload: { ...newComment, author: { email } },
        });
      } catch (error) {
        console.log();
      }
    }
  );

  const gameDeleteHandler = async () => {
    const isConfimed = confirm(
      `Are you sure you want to delete ${game.title} game? `
    );

    if (!isConfimed) {
      return;
    }

    try {
      await gamesApi.remove(gameId);

      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const isOwhner = userId === game._ownerId;

  return (
    <>
      <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">
          <div className="game-header">
            <img className="game-img" src={game.imageUrl} />
            <h1>{game.title}</h1>
            <span className="levels">MaxLevel: {game.maxLevel}</span>
            <p className="type">{game.category}</p>
          </div>

          <p className="text">{game.summary} </p>

          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
              {comments.map((comment) => (
                <li key={comment._id} className="comment">
                  <p>
                    {comment.author.email}: {comment.text}
                  </p>
                </li>
              ))}
            </ul>
            {comments.length === 0 && (
              <p className="no-comment">No comments.</p>
            )}
          </div>

          {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}

          {isOwhner && (
            <div className="buttons">
              <Link to={`/games/${gameId}/edit`} className="button">
                Edit
              </Link>
              <a href="#" onClick={gameDeleteHandler} className="button">
                Delete
              </a>
            </div>
          )}
        </div>

        {/* <!-- Bonus --> */}
        {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
        {isAuthenticated && (
          <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={submitHandler}>
              <textarea
                name="comment"
                placeholder="Comment......"
                onChange={changeHandler}
                value={values.comment}
              ></textarea>
              <input className="btn submit" type="submit" value="Add Comment" />
            </form>
          </article>
        )}
      </section>
    </>
  );
};
export default GameDetails;
