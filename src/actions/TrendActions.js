import axios from "axios";
import config from "../config";

export const GET_TREND_REQUEST = "GET_TREND_REQUEST";
export const GET_TREND_SUCCESS = "GET_TREND_SUCCESS";
export const GET_TREND_FAILURE = "GET_TREND_FAILURE";

export const getTrend = () => dispatch => {
  dispatch({ type: GET_TREND_REQUEST });
  return axios
    .get(config.backend_api_url + "/trend")
    .then(res => {
      dispatch({ type: GET_TREND_SUCCESS, trend: res.data });
    })
    .catch(e => {
      dispatch({ type: GET_TREND_FAILURE, error: e });
    });
};
