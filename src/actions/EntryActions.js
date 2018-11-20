import axios from "axios";
import config from "../config";
import { setAuthKeys } from "../auth";
import { getTrend } from "./TrendActions";
import {
  ADD_BOOKMARKED_TOAST,
  timeout_ms
} from "../components/organisms/ToastManager";
import { addToast } from "./ToastActions";

export const GET_ENTRY_REQUEST = "GET_ENTRY_REQUEST";
export const GET_ENTRY_SUCCESS = "GET_ENTRY_SUCCESS";
export const GET_ENTRY_FAILURE = "GET_ENTRY_FAILURE";
export const POST_ENTRY_REQUEST = "POST_ENTRY_REQUEST";
export const POST_ENTRY_SUCCESS = "POST_ENTRY_SUCCESS";
export const POST_ENTRY_FAILURE = "POST_ENTRY_FAILURE";
export const PRELOAD_ENTRIES = "PRELOAD_ENTRIES";
export const SET_ENTRY_BOOKMARKED = "SET_ENTRY_BOOKMARKED";

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
  setAuthKeys();
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
    .then(res => {
      dispatch({ type: POST_ENTRY_SUCCESS, url, res });
      dispatch(
        addToast(ADD_BOOKMARKED_TOAST, "ブックマークしました", timeout_ms)
      );
      dispatch(getTrend());
    })
    .catch(_ => {
      dispatch({ type: POST_ENTRY_FAILURE, error: "" });
    });
};

export const setEntryBookmarked = bookmarked => dispatch =>
  dispatch({ type: SET_ENTRY_BOOKMARKED, bookmarked });
