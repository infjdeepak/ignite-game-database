import axios from "axios";
import { gameDetailsUrl, gameScreenshotsUrl } from "../api";

export const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detaildata = await axios.get(gameDetailsUrl(id));
  const screenshotData = await axios.get(gameScreenshotsUrl(id));
  dispatch({
    type: "GET_DETAILS",
    payload: {
      gameDetail: detaildata.data,
      gameScreenshots: screenshotData.data,
    },
  });
};
