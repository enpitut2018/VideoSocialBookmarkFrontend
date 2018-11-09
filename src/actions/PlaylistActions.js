import axios from "axios";
import config from "../config";
import { setAuthKeys } from "../auth";

export const POST_ENTRY_TO_PLAYLIST_REQUEST = "POST_ENTRY_TO_PLAYLIST_REQUEST";
export const POST_ENTRY_TO_PLAYLIST_SUCCESS = "POST_ENTRY_TO_PLAYLIST_SUCCESS";
export const POST_ENTRY_TO_PLAYLIST_FAILURE = "POST_ENTRY_TO_PLAYLIST_FAILURE";

export const GET_PLAYLIST_REQUEST = "GET_PLAYLIST_REQUEST";
export const GET_PLAYLIST_SUCCESS = "GET_PLAYLIST_SUCCESS";
export const GET_PLAYLIST_FAILURE = "GET_PLAYLIST_FAILURE";

export const POST_PLAYLIST_REQUEST = "POST_PLAYLIST_REQUEST";
export const POST_PLAYLIST_SUCCESS = "POST_PLAYLIST_SUCCESS";
export const POST_PLAYLIST_FAILURE = "POST_PLAYLIST_FAILURE";

export const DELETE_PLAYLIST_REQUEST = "DELETE_PLAYLIST_REQUEST";
export const DELETE_PLAYLIST_SUCCESS = "DELETE_PLAYLIST_SUCCESS";
export const DELETE_PLAYLIST_FAILURE = "DELETE_PLAYLIST_FAILURE";

export const postEntryToPlaylist = (playListId, entryId) => dispatch => {
  dispatch({ type: POST_PLAYLIST_REQUEST });
  setAuthKeys();

  return axios
    .post(`${config.backend_api_url}/playlists/${playListId}/`, {
      entry: { id: entryId }
    })
    .then(_ => {
      dispatch({ type: POST_PLAYLIST_SUCCESS });
    })
    .catch(_ => {
      dispatch({ type: POST_PLAYLIST_FAILURE, error: "" });
    });
};

export const postPlaylist = (name, isPrivate) => dispatch => {
  dispatch({ type: POST_PLAYLIST_REQUEST });
  setAuthKeys();

  return axios
    .post(`${config.backend_api_url}/playlists`, {
      playlist: { name, private: isPrivate }
    })
    .then(_ => {
      dispatch({ type: POST_PLAYLIST_SUCCESS });
    })
    .catch(_ => {
      dispatch({ type: POST_PLAYLIST_FAILURE, error: "" });
    });
};

export const deletePlaylist = id => dispatch => {
  dispatch({ type: DELETE_PLAYLIST_REQUEST });
  setAuthKeys();

  return axios
    .delete(`${config.backend_api_url}/playlists/${id}`)
    .then(_ => {
      dispatch({ type: DELETE_PLAYLIST_SUCCESS });
    })
    .catch(_ => {
      dispatch({ type: DELETE_PLAYLIST_FAILURE, error: "" });
    });
};

export const getPlaylist = id => dispatch => {
  dispatch({ type: GET_PLAYLIST_REQUEST });
  return axios
    .get(`${config.backend_api_url}/playlists/${id}`)
    .then(res => {
      dispatch({ type: GET_PLAYLIST_SUCCESS, playlist: res.data });
    })
    .catch(error => {
      dispatch({ type: GET_PLAYLIST_FAILURE, error });
    });
};
