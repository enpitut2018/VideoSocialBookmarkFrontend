import {
  GET_CURRENT_USER_PLAYLISTS_REQUEST,
  GET_CURRENT_USER_PLAYLISTS_SUCCESS,
  GET_CURRENT_USER_PLAYLISTS_FAILURE,
  POST_ENTRY_TO_PLAYLIST_REQUEST,
  POST_ENTRY_TO_PLAYLIST_SUCCESS,
  POST_ENTRY_TO_PLAYLIST_FAILURE,
  REMOVE_ENTRY_FROM_PLAYLIST_REQUEST,
  REMOVE_ENTRY_FROM_PLAYLIST_SUCCESS,
  REMOVE_ENTRY_FROM_PLAYLIST_FAILURE,
  GET_PLAYLIST_REQUEST,
  GET_PLAYLIST_SUCCESS,
  GET_PLAYLIST_FAILURE,
  POST_PLAYLIST_REQUEST,
  POST_PLAYLIST_SUCCESS,
  POST_PLAYLIST_FAILURE,
  PUT_PLAYLIST_REQUEST,
  PUT_PLAYLIST_SUCCESS,
  PUT_PLAYLIST_FAILURE,
  DELETE_PLAYLIST_REQUEST,
  DELETE_PLAYLIST_SUCCESS,
  DELETE_PLAYLIST_FAILURE
} from "../actions/PlaylistActions";

const initialState = {
  state: "",
  playlists: [],
  playlist: [],
  url: "",
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_CURRENT_USER_PLAYLISTS_REQUEST:
    return {
      ...state,
      state: ""
    };
  case GET_CURRENT_USER_PLAYLISTS_SUCCESS:
    return {
      ...state,
      state: "loaded",
      playlists: action.playlists
    };
  case GET_CURRENT_USER_PLAYLISTS_FAILURE:
    return {
      ...state
    };
  case POST_ENTRY_TO_PLAYLIST_REQUEST:
    return {
      ...state
    };
  case POST_ENTRY_TO_PLAYLIST_SUCCESS:
    return {
      ...state
    };
  case POST_ENTRY_TO_PLAYLIST_FAILURE:
    return {
      ...state
    };
  case REMOVE_ENTRY_FROM_PLAYLIST_REQUEST:
    return {
      ...state
    };
  case REMOVE_ENTRY_FROM_PLAYLIST_SUCCESS:
    return {
      ...state
    };
  case REMOVE_ENTRY_FROM_PLAYLIST_FAILURE:
    return {
      ...state
    };
  case GET_PLAYLIST_REQUEST:
    return {
      ...state,
      state: ""
    };
  case GET_PLAYLIST_SUCCESS:
    return {
      state: "loaded",
      playlist: action.playlist
    };
  case GET_PLAYLIST_FAILURE:
    return {
      ...state
    };
  case POST_PLAYLIST_REQUEST:
    return {
      ...state
    };
  case POST_PLAYLIST_SUCCESS:
    return {
      ...state
    };
  case POST_PLAYLIST_FAILURE:
    return {
      ...state
    };
  case PUT_PLAYLIST_REQUEST:
    return {
      ...state
    };
  case PUT_PLAYLIST_SUCCESS:
    return {
      ...state
    };
  case PUT_PLAYLIST_FAILURE:
    return {
      ...state
    };
  case DELETE_PLAYLIST_REQUEST:
    return {
      ...state
    };
  case DELETE_PLAYLIST_SUCCESS:
    return {
      ...state
    };
  case DELETE_PLAYLIST_FAILURE:
    return {
      ...state
    };
  default:
    return state;
  }
};
