import {
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
  DELETE_PLAYLIST_REQUEST,
  DELETE_PLAYLIST_SUCCESS,
  DELETE_PLAYLIST_FAILURE
} from "../actions/PlaylistActions";

const initialState = {
  hasLoaded: false,
  trend: [],
  url: "",
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
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
      ...state
    };
  case GET_PLAYLIST_SUCCESS:
    return {
      ...state
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
  }
};
