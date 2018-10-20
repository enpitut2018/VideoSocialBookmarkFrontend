import axios from "axios";
import config from "../config";
import { setAuthKeys } from "../auth";

export const POST_BOOKMARK_REQUEST = "POST_BOOKMARK_REQUEST";
export const POST_BOOKMARK_SUCCESS = "POST_BOOKMARK_SUCCESS";
export const POST_BOOKMARK_FAILURE = "POST_BOOKMARK_FAILURE";

export const postBookmark = (url, comment) => dispatch => {
  dispatch({ type: POST_BOOKMARK_REQUEST });
  setAuthKeys();

  return axios
    .post(config.backend_api_url + "/bookmarks", {
      original_url: url,
      comment
    })
    .then(res => {
      dispatch({ type: POST_BOOKMARK_SUCCESS });
    })
    .catch(_ => {
      dispatch({ type: POST_BOOKMARK_FAILURE, error: "" });
    });
};
