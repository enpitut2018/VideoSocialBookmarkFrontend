import axios from "axios";
import config from "../config";

export const SEARCH_ENTRY_REQUEST = "SEARCH_ENTRY_REQUEST";
export const SEARCH_ENTRY_SUCCESS = "SEARCH_ENTRY_SUCCESS";
export const SEARCH_ENTRY_FAILURE = "SEARCH_ENTRY_FAILURE";

export const searchEntry = (query) => dispatch => {
  dispatch({ type: SEARCH_ENTRY_REQUEST });
  return axios
    .get(`${config.backend_api_url}/search/entry/?title=${query}`)
    .then(res => {
      dispatch({ type: SEARCH_ENTRY_SUCCESS, result: res.data });
    })
    .catch(error => {
      dispatch({ type: SEARCH_ENTRY_FAILURE, error });
    });
};

