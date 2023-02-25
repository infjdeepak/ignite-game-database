const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  isError: false,
};
const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_API":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case "SEARCH_GAME":
      return {
        ...state,
        searched: action.payload.searchedGames,
      };
    case "SHOW_ERROR":
      return {
        ...state,
        isError: true,
      };
    case "CLEAR":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};
export default gamesReducer;
