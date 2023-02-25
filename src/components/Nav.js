//styled components and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animation";
//router
import { Link } from "react-router-dom";
import { useState } from "react";
//actions
import { searchData, clearSearchData } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  //dispatch
  const dispatch = useDispatch();
  //state
  const [inputText, setInputText] = useState("");
  //handler
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  const searchGameHandler = (e) => {
    e.preventDefault();
    dispatch(searchData(inputText));
    setInputText("");
  };
  return (
    <NavStyle variants={fadeIn} initial={"hidden"} animate={"show"}>
      <Logo className="logo">
        <Link onClick={() => dispatch(clearSearchData())} to="/">
          Ignite
        </Link>
      </Logo>
      <Search className="search">
        <input
          onChange={inputHandler}
          value={inputText}
          type="text"
          placeholder="search"
        />
        <button onClick={searchGameHandler}>Search</button>
      </Search>
    </NavStyle>
  );
};

//styled components
const NavStyle = styled(motion.div)`
  padding: 2rem 5%;
  text-align: center;
`;
const Logo = styled.div`
  margin-bottom: 3rem;
  a {
    font-size: 3rem;
    font-weight: bold;
  }
`;
const Search = styled.form`
  input {
    width: 40%;
    padding: 1rem;
    border: none;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 600px) {
      width: 50%;
    }
  }
  button {
    padding: 1rem 3rem;
    background: #ff7575;
    border: none;
    cursor: pointer;
    font-weight: 600;
  }
`;
export default Nav;
