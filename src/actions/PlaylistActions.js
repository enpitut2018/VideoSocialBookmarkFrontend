import axios from "axios";
import config from "../config";
import { setAuthKeys } from "../auth";
import { addToast } from "./ToastActions";
import {
  ADD_PLAYLIST_TOAST,
  REMOVE_PLAYLIST_TOAST,
  timeout_ms
} from "../components/organisms/ToastManager";

export const GET_CURRENT_USER_PLAYLISTS_REQUEST =
  "GET_CURRENT_USER_PLAYLISTS_REQUEST";
export const GET_CURRENT_USER_PLAYLISTS_SUCCESS =
  "GET_CURRENT_USER_PLAYLISTS_SUCCESS";
export const GET_CURRENT_USER_PLAYLISTS_FAILURE =
  "GET_CURRENT_USER_PLAYLISTS_FAILURE";

export const POST_ENTRY_TO_PLAYLIST_REQUEST = "POST_ENTRY_TO_PLAYLIST_REQUEST";
export const POST_ENTRY_TO_PLAYLIST_SUCCESS = "POST_ENTRY_TO_PLAYLIST_SUCCESS";
export const POST_ENTRY_TO_PLAYLIST_FAILURE = "POST_ENTRY_TO_PLAYLIST_FAILURE";

export const REMOVE_ENTRY_FROM_PLAYLIST_REQUEST =
  "REMOVE_ENTRY_FROM_PLAYLIST_REQUEST";
export const REMOVE_ENTRY_FROM_PLAYLIST_SUCCESS =
  "REMOVE_ENTRY_FROM_PLAYLIST_SUCCESS";
export const REMOVE_ENTRY_FROM_PLAYLIST_FAILURE =
  "REMOVE_ENTRY_FROM_PLAYLIST_FAILURE";

export const GET_PLAYLIST_REQUEST = "GET_PLAYLIST_REQUEST";
export const GET_PLAYLIST_SUCCESS = "GET_PLAYLIST_SUCCESS";
export const GET_PLAYLIST_FAILURE = "GET_PLAYLIST_FAILURE";

export const GET_USER_PLAYLISTS_REQUEST = "GET_USER_PLAYLISTS_REQUEST";
export const GET_USER_PLAYLISTS_SUCCESS = "GET_USER_PLAYLISTS_SUCCESS";
export const GET_USER_PLAYLISTS_FAILURE = "GET_USER_PLAYLISTS_FAILURE";

export const POST_PLAYLIST_REQUEST = "POST_PLAYLIST_REQUEST";
export const POST_PLAYLIST_SUCCESS = "POST_PLAYLIST_SUCCESS";
export const POST_PLAYLIST_FAILURE = "POST_PLAYLIST_FAILURE";

export const PUT_PLAYLIST_REQUEST = "PUT_PLAYLIST_REQUEST";
export const PUT_PLAYLIST_SUCCESS = "PUT_PLAYLIST_SUCCESS";
export const PUT_PLAYLIST_FAILURE = "PUT_PLAYLIST_FAILURE";

export const DELETE_PLAYLIST_REQUEST = "DELETE_PLAYLIST_REQUEST";
export const DELETE_PLAYLIST_SUCCESS = "DELETE_PLAYLIST_SUCCESS";
export const DELETE_PLAYLIST_FAILURE = "DELETE_PLAYLIST_FAILURE";

export const getCurrentUserPlaylists = () => dispatch => {
  dispatch({ type: GET_CURRENT_USER_PLAYLISTS_REQUEST });
  setAuthKeys();

  return axios
    .get(`${config.backend_api_url}/playlists`)
    .then(res => {
      dispatch({
        type: GET_CURRENT_USER_PLAYLISTS_SUCCESS,
        playlists: res.data
      });
    })
    .catch(() => dispatch({ type: GET_CURRENT_USER_PLAYLISTS_FAILURE }));
};

export const postEntryToPlaylist = (
  playlistId,
  entryId,
  prevId,
  nextId
) => dispatch => {
  dispatch({ type: POST_PLAYLIST_REQUEST });
  setAuthKeys();

  return axios
    .post(`${config.backend_api_url}/playlists/${playlistId}/`, {
      playlist_item: {
        entry_id: entryId,
        ...(prevId !== undefined && { prev_id: prevId }),
        ...(nextId !== undefined && { next_id: nextId })
      }
    })
    .then(_ => {
      dispatch({ type: POST_PLAYLIST_SUCCESS });
      dispatch(
        addToast(ADD_PLAYLIST_TOAST, "プレイリストに追加しました", timeout_ms)
      );
    })
    .catch(_ => {
      dispatch({ type: POST_PLAYLIST_FAILURE, error: "" });
    });
};

export const removeEntryFromPlaylist = (playListId, entryId) => dispatch => {
  dispatch({ type: REMOVE_ENTRY_FROM_PLAYLIST_REQUEST });
  setAuthKeys();

  return axios
    .delete(`${config.backend_api_url}/playlists/${playListId}`, {
      data: {
        playlist_item: { entry_id: entryId }
      }
    })
    .then(() => {
      dispatch({ type: REMOVE_ENTRY_FROM_PLAYLIST_SUCCESS });
      dispatch(
        addToast(
          REMOVE_PLAYLIST_TOAST,
          "プレイリストから削除しました",
          timeout_ms
        )
      );
    })
    .catch(() => dispatch({ type: REMOVE_ENTRY_FROM_PLAYLIST_FAILURE }));
};

export const postPlaylist = (name, isPrivate) => dispatch => {
  dispatch({ type: POST_PLAYLIST_REQUEST });
  setAuthKeys();

  return axios
    .post(`${config.backend_api_url}/playlists`, {
      playlist: { name, is_private: isPrivate }
    })
    .then(_ => {
      dispatch({ type: POST_PLAYLIST_SUCCESS });
      dispatch(getCurrentUserPlaylists());
    })
    .catch(_ => {
      dispatch({ type: POST_PLAYLIST_FAILURE, error: "" });
    });
};

export const putPlaylist = (
  playlistId,
  name,
  isPrivate,
  refresh
) => dispatch => {
  dispatch({ type: PUT_PLAYLIST_REQUEST });
  setAuthKeys();

  return axios
    .put(`${config.backend_api_url}/playlists/${playlistId}`, {
      playlist: {
        ...(name !== undefined && { name }),
        ...(isPrivate !== undefined && { is_private: isPrivate })
      }
    })
    .then(() => {
      dispatch({ type: PUT_PLAYLIST_SUCCESS });
      if (refresh) {
        dispatch(getCurrentUserPlaylists());
      }
    })
    .catch(() => {
      dispatch({ type: PUT_PLAYLIST_FAILURE });
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

// eslint-disable-next-line no-unused-vars
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
