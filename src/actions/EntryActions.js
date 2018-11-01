import axios from "axios";
import config from "../config";
import { setAuthKeys } from "../auth";
import { getTrend } from "./TrendActions";

export const GET_ENTRY_REQUEST = "GET_ENTRY_REQUEST";
export const GET_ENTRY_SUCCESS = "GET_ENTRY_SUCCESS";
export const GET_ENTRY_FAILURE = "GET_ENTRY_FAILURE";
export const POST_ENTRY_REQUEST = "POST_ENTRY_REQUEST";
export const POST_ENTRY_SUCCESS = "POST_ENTRY_SUCCESS";
export const POST_ENTRY_FAILURE = "POST_ENTRY_FAILURE";
export const PRELOAD_ENTRIES = "PRELOAD_ENTRIES";

export const preloadTrend = () => dispatch => {
  const page = 1;
  return axios
    .get(`${config.backend_api_url}/trend/${String(page)}/preload`)
    .then(res => {
      dispatch({ type: PRELOAD_ENTRIES, entries: res.data });
    });
};

export const getEntry = id => dispatch => {
  dispatch({ type: GET_ENTRY_REQUEST, id });
  return axios
    .get(`${config.backend_api_url}/entries/${id}`)
    .then(res => {
      dispatch({ type: GET_ENTRY_SUCCESS, entry: res.data, id });
    })
    .catch(_ => {
      dispatch({ type: GET_ENTRY_FAILURE, error: "" });
    });
};

export const postEntry = (url, comment) => dispatch => {
  dispatch({ type: POST_ENTRY_REQUEST });
  setAuthKeys();

  return axios
    .post(`${config.backend_api_url}/entries`, {
      entry: {
        original_url: url
      },
      comment: {
        content: comment
      }
    })
    .then(_ => {
      dispatch({ type: POST_ENTRY_SUCCESS });
      dispatch(getTrend());
    })
    .catch(_ => {
      dispatch({ type: POST_ENTRY_FAILURE, error: "" });
    });
};
