import axios from "axios";
import config from "../config";

export const GET_RANKING_REQUEST = "GET_RANKING_REQUEST";
export const GET_RANKING_SUCCESS = "GET_RANKING_SUCCESS";
export const GET_RANKING_FAILURE = "GET_RANKING_FAILURE";

export const getRanking = () => dispatch => {
  dispatch({ type: GET_RANKING_REQUEST });
  return axios
    .get(config.backend_api_url + "/ranking")
    .then(res => {
      dispatch({ type: GET_RANKING_SUCCESS, ranking: res.data });
    }).catch(_ => {
      dispatch({ type: GET_RANKING_FAILURE, error: '' });
    });
}
