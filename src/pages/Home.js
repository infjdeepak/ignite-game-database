import { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../actions/gamesAction";
//styled component and framer motion, animations
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { fadeIn } from "../animation";
//components
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
import ErrorPage from "../components/ErrorPage";
//react router
import { useLocation } from "react-router-dom";
const Home = () => {
  //get path name
  const location = useLocation();
  const path = location.pathname;
  const pathId = path.split("/")[2];
  //fetch data
  const dispatch = useDispatch();
  //useEffects
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);
  //useEffects for fixing bug in smartphones
  useEffect(() => {
    if (pathId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [pathId]);
  //getting data back
  const { upcoming, newGames, popular, searched, isError } = useSelector(
    (state) => state.games
  );

  return isError ? (
    <ErrorPage />
  ) : (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <LayoutGroup>
        <AnimatePresence>
          {pathId && <GameDetails layoutId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched-games">
            <h2>Searched Results</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  image={game.background_image}
                  id={game.id}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              image={game.background_image}
              id={game.id}
              key={game.id}
            />
          ))}
        </Games>

        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              image={game.background_image}
              id={game.id}
              key={game.id}
            />
          ))}
        </Games>

        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              image={game.background_image}
              id={game.id}
              key={game.id}
            />
          ))}
        </Games>
      </LayoutGroup>
    </GameList>
  );
};
//styled components
const GameList = styled(motion.div)`
  width: 90%;
  margin: auto;
  h2 {
    margin: 4rem 0;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 4rem;
`;
export default Home;
