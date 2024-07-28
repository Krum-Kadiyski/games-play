import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const GameListItem = ({ _id, title, categoty, imageUrl }) => {
  return (
    <>
      <div className="allGames">
        <div className="allGames-info">
          <img src={imageUrl} />
          <h6>{categoty}</h6>
          <h2>{title}</h2>
          <Link to={`/games/${_id}/details`} className="details-button">
            Details
          </Link>
        </div>
      </div>
    </>
  );
};
export default GameListItem;
