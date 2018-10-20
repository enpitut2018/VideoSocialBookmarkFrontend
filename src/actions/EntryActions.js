import axios from "axios";
import config from "../config";

export const GET_ENTRY_REQUEST = "GET_ENTRY_REQUEST";
export const GET_ENTRY_SUCCESS = "GET_ENTRY_SUCCESS";
export const GET_ENTRY_FAILURE = "GET_ENTRY_FAILURE";

export const getEntry = id => dispatch => {
  dispatch({ type: GET_ENTRY_REQUEST });
  return axios
    .get(config.backend_api_url + "/entries/" + String(id))
    .then(res => {
      dispatch({ type: GET_ENTRY_SUCCESS, entry: res.data });
    })
    .catch(_ => {
      dispatch({ type: GET_ENTRY_FAILURE, error: "" });
    });
};
