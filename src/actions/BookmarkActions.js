import axios from "axios";
import config from "../config";
import { setAuthKeys } from "../auth";
import { SET_TREND_BOOKMARKED } from "./TrendActions";

export const POST_BOOKMARK_REQUEST = "POST_BOOKMARK_REQUEST";
export const POST_BOOKMARK_SUCCESS = "POST_BOOKMARK_SUCCESS";
export const POST_BOOKMARK_FAILURE = "POST_BOOKMARK_FAILURE";

export const DELETE_BOOKMARK_REQUEST = "DELETE_BOOKMARK_REQUEST";
export const DELETE_BOOKMARK_SUCCESS = "DELETE_BOOKMARK_SUCCESS";
export const DELETE_BOOKMARK_FAILURE = "DELETE_BOOKMARK_FAILURE";

export const postBookmark = entryId => dispatch => {
  dispatch({ type: POST_BOOKMARK_REQUEST });
  setAuthKeys();

  return axios
    .post(`${config.backend_api_url}/bookmarks`, {
      bookmark: { entry_id: entryId }
    })
    .then(_ => {
      dispatch({ type: POST_BOOKMARK_SUCCESS });
      dispatch({ type: SET_TREND_BOOKMARKED, entryId, bookmarked: true });
    })
    .catch(_ => {
      dispatch({ type: POST_BOOKMARK_FAILURE, error: "" });
    });
};

export const deleteBookmark = entryId => dispatch => {
  dispatch({ type: DELETE_BOOKMARK_REQUEST });
  setAuthKeys();

  return axios
    .delete(`${config.backend_api_url}/bookmarks/${entryId}`)
    .then(_ => {
      dispatch({ type: DELETE_BOOKMARK_SUCCESS });
      dispatch({ type: SET_TREND_BOOKMARKED, entryId, bookmarked: false });
    })
    .catch(_ => {
      dispatch({ type: DELETE_BOOKMARK_FAILURE, error: "" });
    });
};
