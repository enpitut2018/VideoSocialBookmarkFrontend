import axios from "axios";
import config from "../config";
import { setAuthKeys } from "../auth";
import { getTrend } from "./TrendActions";

export const POST_BOOKMARK_REQUEST = "POST_BOOKMARK_REQUEST";
export const POST_BOOKMARK_SUCCESS = "POST_BOOKMARK_SUCCESS";
export const POST_BOOKMARK_FAILURE = "POST_BOOKMARK_FAILURE";

export const postBookmark = entryId => dispatch => {
  dispatch({ type: POST_BOOKMARK_REQUEST });
  setAuthKeys();

  return axios
    .post(`${config.backend_api_url}/bookmarks`, {
      bookmark: { entry_id: entryId }
    })
    .then(res => {
      dispatch({ type: POST_BOOKMARK_SUCCESS });
      dispatch(getTrend());
    })
    .catch(_ => {
      dispatch({ type: POST_BOOKMARK_FAILURE, error: "" });
    });
};
