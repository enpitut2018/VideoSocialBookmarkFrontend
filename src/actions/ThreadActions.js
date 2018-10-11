import axios from "axios";

export const GET_THREAD = "GET_THREAD";

export const getThread = id => dispatch => {
  axios
    .get("http://localhost:3001/threads/" + String(id))
    .then(res => dispatch({ type: GET_THREAD, thread: res.data }));
};
