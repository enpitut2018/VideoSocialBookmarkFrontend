import axios from "axios";
import config from "../config";
import { setAuthKeys } from "../auth";

export const POST_STAR_REQUEST = "POST_STAR_REQUEST";
export const POST_STAR_SUCCESS = "POST_STAR_SUCCESS";
export const POST_STAR_FAILURE = "POST_STAR_FAILURE";

export const postStar = entryId => dispatch => {
  dispatch({ type: POST_STAR_REQUEST });
  setAuthKeys();

  return axios
    .post(`${config.backend_api_url}/stars/entries/${entryId}`, {})
    .then(res => {
      dispatch({ type: POST_STAR_SUCCESS });
    })
    .catch(_ => {
      dispatch({ type: POST_STAR_FAILURE, error: "" });
    });
};

export const DELETE_STAR_REQUEST = "DELETE_STAR_REQUEST";
export const DELETE_STAR_SUCCESS = "DELETE_STAR_SUCCESS";
export const DELETE_STAR_FAILURE = "DELETE_STAR_FAILURE";

export const deleteStar = entryId => dispatch => {
  dispatch({ type: DELETE_STAR_REQUEST });
  setAuthKeys();

  return axios
    .delete(`${config.backend_api_url}/stars/entries/${entryId}`)
    .then(res => {
      dispatch({ type: DELETE_STAR_SUCCESS });
    })
    .catch(_ => {
      dispatch({ type: DELETE_STAR_FAILURE, error: "" });
    });
};
