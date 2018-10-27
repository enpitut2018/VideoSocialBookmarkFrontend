import axios from "axios";
import config from "../config";
import { setAuthKeys } from "../auth";
import { getEntry } from "./EntryActions";

export const POST_COMMENT_REQUEST = "POST_COMMENT_REQUEST";
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS";
export const POST_COMMENT_FAILURE = "POST_COMMENT_FAILURE";

export const postComment = (entryId, comment) => dispatch => {
  dispatch({ type: POST_COMMENT_REQUEST });
  setAuthKeys();

  return axios
    .post(`${config.backend_api_url}/entries/${entryId}/comments`, {
      comment: {
        content: comment
      }
    })
    .then(res => {
      dispatch({ type: POST_COMMENT_SUCCESS });
      dispatch(getEntry(entryId));
    })
    .catch(_ => {
      dispatch({ type: POST_COMMENT_FAILURE, error: "" });
    });
};
