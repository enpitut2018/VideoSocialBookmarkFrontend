import axios from "axios";
import config from "../config";

export const GET_TREND_REQUEST = "GET_TREND_REQUEST";
export const GET_TREND_SUCCESS = "GET_TREND_SUCCESS";
export const GET_TREND_FAILURE = "GET_TREND_FAILURE";

export const SET_TREND_BOOKMARKED = "SET_TREND_BOOKMARKED";

export const getTrend = (page=1) => dispatch => {
  dispatch({ type: GET_TREND_REQUEST });
  return axios
    .get(`${config.backend_api_url}/trend?page=${page}`)
    .then(res => {
      dispatch({ type: GET_TREND_SUCCESS, trend: res.data });
    })
    .catch(error => {
      dispatch({ type: GET_TREND_FAILURE, error });
    });
};

export const setTrendBookmarked = (entryId, bookmarked) => dispatch =>
  dispatch({ type: SET_TREND_BOOKMARKED, entryId, bookmarked });
