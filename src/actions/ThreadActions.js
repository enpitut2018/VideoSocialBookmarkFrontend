import axios from "axios";

export const GET_THREAD = "GET_THREAD";

export const getThread = () => dispatch => {
  axios
    .get("http://localhost:3000/threads/1")
    .then(res => dispatch({ type: GET_THREAD, url: res.data.url }));
};
