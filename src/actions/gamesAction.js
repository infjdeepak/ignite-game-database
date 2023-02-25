import axios from "axios";
import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchedGamesUrl,
} from "../api";

export const loadData = () => async (dispatch) => {
  try {
    const popularGamesData = await axios.get(popularGamesUrl());
    const upcomingGamesData = await axios.get(upcomingGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());
    dispatch({
      type: "FETCH_API",
      payload: {
        popular: popularGamesData.data.results,
        upcoming: upcomingGamesData.data.results,
        newGames: newGamesData.data.results,
      },
    });
  } catch (error) {
    dispatch({
      type: "SHOW_ERROR",
    });
  }
};

export const searchData = (search_text) => async (dispatch) => {
  try {
    const searchedGamesData = await axios.get(searchedGamesUrl(search_text));
    dispatch({
      type: "SEARCH_GAME",
      payload: {
        searchedGames: searchedGamesData.data.results,
      },
    });
  } catch (error) {
    dispatch({
      type: "SHOW_ERROR",
    });
  }
};

export const clearSearchData = () => {
  return {
    type: "CLEAR",
  };
};
