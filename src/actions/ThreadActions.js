import axios from "axios";
import config from "../config";

export const GET_THREAD = "GET_THREAD";

export const getThread = id => dispatch => {
  axios
    .get(config.backend_api_url + "/threads/" + String(id))
    .then(res => dispatch({ type: GET_THREAD, thread: res.data }));
};
