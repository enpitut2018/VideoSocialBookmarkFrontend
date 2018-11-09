import axios from "axios";
import config from "../config";

export const GET_PLAYLIST_REQUEST = "GET_PLAYLIST_REQUEST";
export const GET_PLAYLIST_SUCCESS = "GET_PLAYLIST_SUCCESS";
export const GET_PLAYLIST_FAILURE = "GET_PLAYLIST_FAILURE";

export const SET_PLAYLIST_BOOKMARKED = "SET_PLAYLIST_BOOKMARKED";

export const getPlaylist = (id) => dispatch => {
  dispatch({ type: GET_PLAYLIST_REQUEST });
  return axios
    .get(`${config.backend_api_url}/playlist/${id}`)
    .then(res => {
      dispatch({ type: GET_PLAYLIST_SUCCESS, playlist: res.data });
    })
    .catch(error => {
      dispatch({ type: GET_PLAYLIST_FAILURE, error });
    });
};
