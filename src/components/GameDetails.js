//redux
import { useSelector } from "react-redux";
//styled component and framer motion
import styled from "styled-components";
import { motion } from "framer-motion";
//router
import { useNavigate } from "react-router-dom";
//imageresizer
import { smallImage } from "../utils";
//images
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import fullStar from "../img/star-full.png";
import emptyStar from "../img/star-empty.png";

const GameDetails = ({ layoutId }) => {
  const navigate = useNavigate();
  //STATE
  const { gameDetail, gameScreenshots, isLoading } = useSelector(
    (state) => state.gameData
  );
  //handler
  const exitDetailHandler = (e) => {
    const target = e.target;
    if (target.classList.contains("shadow")) {
      navigate("/");
      document.body.style.overflow = "auto";
    }
  };
  //functions
  const getPlatfromImg = (platform) => {
    switch (platform) {
      case "Nintendo Switch":
        return nintendo;
      case "Xbox One":
        return xbox;
      case "PlayStation 4":
        return playstation;
      case "Steam":
        return steam;
      case "macOS":
        return apple;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };
  const getRatingStars = () => {
    const stars = [];
    const rating = Math.floor(gameDetail.rating);
    for (let i = 0; i < 5; i++) {
      if (rating <= i) {
        stars.push(<img alt="star" key={i} src={emptyStar}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={fullStar}></img>);
      }
    }
    return stars;
  };

  return (
    <>
      {!isLoading && (
        <Shadow onClick={exitDetailHandler} className="shadow">
          <Details layoutId={layoutId}>
            <Stats>
              <Rating>
                <motion.h3>{gameDetail.name}</motion.h3>
                <motion.p>Rating: {gameDetail.rating}</motion.p>
                {getRatingStars()}
              </Rating>
              <Platforms>
                <motion.h4>Platforms</motion.h4>
                <div className="icons">
                  {gameDetail.platforms.map((data) => (
                    <motion.img
                      key={data.platform.id}
                      src={getPlatfromImg(data.platform.name)}
                      alt={data.platform.name}
                    ></motion.img>
                  ))}
                </div>
              </Platforms>
            </Stats>
            <CoverImg>
              <motion.img
                src={
                  gameDetail.background_image
                    ? smallImage(gameDetail.background_image, 1280)
                    : gameDetail.background_image
                }
                alt={gameDetail.name}
              />
            </CoverImg>
            <Description>
              <motion.p>{gameDetail.description_raw}</motion.p>
            </Description>
            <Gallery>
              {gameScreenshots.results.map((data) => (
                <motion.img
                  key={data.id}
                  src={data.image ? smallImage(data.image, 640) : data.image}
                  alt="game"
                />
              ))}
            </Gallery>
          </Details>
        </Shadow>
      )}
    </>
  );
};
//styled component
const Shadow = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(0.5rem);
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
`;
const Details = styled(motion.div)`
  min-height: 100vh;
  position: absolute;
  width: 80%;
  background: whitesmoke;
  padding: 2rem 5%;
  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;
const Stats = styled(motion.div)`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  min-height: 20vh;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 4rem;
  }
`;
const Rating = styled(motion.div)`
  h3 {
    margin: 0;
  }
  p {
    margin-top: 1rem;
  }
`;
const Platforms = styled(motion.div)`
  display: flex;
  flex-direction: column;
  .icons {
    margin-top: 1rem;
    display: flex;
    gap: 2rem;
    img {
      width: 4rem;
    }
  }
`;
const CoverImg = styled(motion.div)`
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const Description = styled(motion.div)`
  margin: 4rem 0;
`;

const Gallery = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
  img {
    width: 100%;
  }
`;
export default GameDetails;
