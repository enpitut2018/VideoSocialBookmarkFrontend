import axios from "axios";
import config from "../config";

export const GET_THREAD_REQUEST = "GET_THREAD_REQUEST";
export const GET_THREAD_SUCCESS = "GET_THREAD_SUCCESS";
export const GET_THREAD_FAILURE = "GET_THREAD_FAILURE";

export const getThread = id => dispatch => {
  dispatch({ type: GET_THREAD_REQUEST });
  return axios
    .get(config.backend_api_url + "/threads/" + String(id))
    .then(res => {
      dispatch({ type: GET_THREAD_SUCCESS, thread: res.data });
    }).catch(_ => {
      dispatch({ type: GET_THREAD_FAILURE, error: '' });
    });
}
