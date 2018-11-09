import axios from "axios";
import config from "../config";
import { setAuthKeys } from "../auth";

export const POST_PLAYLIST_REQUEST = "POST_PLAYLIST_REQUEST";
export const POST_PLAYLIST_SUCCESS = "POST_PLAYLIST_SUCCESS";
export const POST_PLAYLIST_FAILURE = "POST_PLAYLIST_FAILURE";

export const DELETE_PLAYLIST_REQUEST = "DELETE_PLAYLIST_REQUEST";
export const DELETE_PLAYLIST_SUCCESS = "DELETE_PLAYLIST_SUCCESS";
export const DELETE_PLAYLIST_FAILURE = "DELETE_PLAYLIST_FAILURE";

export const postPlaylist = entryId => dispatch => {
  dispatch({ type: POST_PLAYLIST_REQUEST });
  setAuthKeys();

  return axios
    .post(`${config.backend_api_url}/bookmarks`, {
      bookmark: { entry_id: entryId }
    })
    .then(_ => {
      dispatch({ type: POST_PLAYLIST_SUCCESS });
    })
    .catch(_ => {
      dispatch({ type: POST_PLAYLIST_FAILURE, error: "" });
    });
};

export const deletePlaylist = entryId => dispatch => {
  dispatch({ type: DELETE_PLAYLIST_REQUEST });
  setAuthKeys();

  return axios
    .delete(`${config.backend_api_url}/bookmarks`, {
      data: {
        bookmark: { entry_id: entryId }
      }
    })
    .then(_ => {
      dispatch({ type: DELETE_PLAYLIST_SUCCESS });
    })
    .catch(_ => {
      dispatch({ type: DELETE_PLAYLIST_FAILURE, error: "" });
    });
};
