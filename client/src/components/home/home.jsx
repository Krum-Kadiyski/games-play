import { useEffect, useState } from 'react';
import gamesAPI from '../../api/games-api';
import LatestGame from '../latest-game/latest-game';

const Home = () => {
  const [latestGames, setLatestGames] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await gamesAPI.getLatest();

      setLatestGames(result)
    })();
  }, []);
  return (
    <>
      <section id="welcome-world">
        <div className="welcome-message">
          <h2>ALL new games are</h2>
          <h3>Only in GamesPlay</h3>
        </div>
        <img src="./images/four_slider_img01.png" alt="hero" />

        <div id="home-page">
          <h1>Latest Games</h1>

          {/* <!-- Display div: with information about every game (if any) --> */}

          {latestGames.length > 0 ? (
            latestGames.map((game) => <LatestGame key={game._id} {...game} />)
          ) : (
            <p className="no-articles">No games yet</p>
          )}

          {/* <!-- Display paragraph: If there is no games  --> */}
        </div>
      </section>
    </>
  );
};
export default Home;
