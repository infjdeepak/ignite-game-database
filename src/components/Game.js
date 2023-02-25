//redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailAction";
//styled component and framer motion,andimatin
import styled from "styled-components";
import { motion } from "framer-motion";
import { popUp } from "../animation";
//router
import { Link } from "react-router-dom";
//image resize
import { smallImage } from "../utils";
const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  //HANDLER
  const getDetailsHandler = () => {
    dispatch(loadDetails(id));
    document.body.style.overflow = "hidden";
  };

  return (
    <GameStyle
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={id.toString()}
      onClick={getDetailsHandler}
    >
      <Link to={`/game/${id.toString()}`}>
        <motion.div className="info">
          <motion.h3 layout>{name}</motion.h3>
          <motion.p layout>{released}</motion.p>
        </motion.div>
        <motion.img
          layout
          src={image ? smallImage(image, 420) : image}
          alt={name}
        />
      </Link>
    </GameStyle>
  );
};

//styled components
const GameStyle = styled(motion.div)`
  text-align: center;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0px 0px 15px rgb(0, 0, 0, 0.1);
  a {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .info {
    flex: 1;
  }
  h3 {
    margin: 2rem 1rem;
  }
  p {
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
  }
`;
export default Game;
