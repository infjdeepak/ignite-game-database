const initState = {
  gameDetail: { platforms: [] },
  gameScreenshots: { results: [] },
  isLoading: true,
};
const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        gameDetail: action.payload.gameDetail,
        gameScreenshots: action.payload.gameScreenshots,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};
export default detailsReducer;
