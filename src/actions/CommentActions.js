import axios from "axios";
import config from "../config";
import { setAuthKeys } from "../auth";
import { getEntry } from "./EntryActions";

export const POST_COMMENT_REQUEST = "POST_COMMENT_REQUEST";
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS";
export const POST_COMMENT_FAILURE = "POST_COMMENT_FAILURE";
export const GET_COMMENTS_REQUEST = "GET_COMMENTS_REQUEST";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";

export const postComment = (entryId, comment) => dispatch => {
  dispatch({ type: POST_COMMENT_REQUEST });
  setAuthKeys();

  return axios
    .post(`${config.backend_api_url}/entries/${entryId}/comments`, {
      comment: {
        content: comment
      }
    })
    .then(_ => {
      dispatch({ type: POST_COMMENT_SUCCESS });
      dispatch(getEntry(entryId));
    })
    .catch(_ => {
      dispatch({ type: POST_COMMENT_FAILURE, error: "" });
    });
};

export const getComments = (entryId, page=1) => dispatch => {
  dispatch({ type: GET_COMMENTS_REQUEST });

  return axios
    .get(`${config.backend_api_url}/entries/${entryId}/comments?page=${page}`)
    .then(res => {
      dispatch({ type: GET_COMMENTS_SUCCESS, comments: res.data });
    })
    .catch(_ => {
      dispatch({ type: GET_COMMENTS_FAILURE, error: "" });
    });
};
