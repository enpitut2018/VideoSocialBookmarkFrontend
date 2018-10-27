import axios from "axios";
import config from "../config";
import { setAuthKeys } from "../auth";
import { getEntry } from "./EntryActions";

export const POST_STAR_REQUEST = "POST_STAR_REQUEST";
export const POST_STAR_SUCCESS = "POST_STAR_SUCCESS";
export const POST_STAR_FAILURE = "POST_STAR_FAILURE";

export const postComment = (entryId, star) => dispatch => {
  dispatch({ type: POST_STAR_REQUEST });
  setAuthKeys();

  return axios
    .post(`${config.backend_api_url}/stars/entries/${entryId}`, {})
    .then(res => {
      dispatch({ type: POST_STAR_SUCCESS });
      dispatch(getEntry(entryId));
    })
    .catch(_ => {
      dispatch({ type: POST_STAR_FAILURE, error: "" });
    });
};
