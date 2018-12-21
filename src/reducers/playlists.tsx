import { DeepReadonly } from "utility-types";
import {
  DELETE_PLAYLIST_FAILURE,
  DELETE_PLAYLIST_REQUEST,
  DELETE_PLAYLIST_SUCCESS,
  GET_CURRENT_USER_PLAYLISTS_FAILURE,
  GET_CURRENT_USER_PLAYLISTS_REQUEST,
  GET_CURRENT_USER_PLAYLISTS_SUCCESS,
  GET_PLAYLIST_FAILURE,
  GET_PLAYLIST_REQUEST,
  GET_PLAYLIST_SUCCESS,
  GET_USER_PLAYLISTS_FAILURE,
  GET_USER_PLAYLISTS_REQUEST,
  GET_USER_PLAYLISTS_SUCCESS,
  POST_ENTRY_TO_PLAYLIST_FAILURE,
  POST_ENTRY_TO_PLAYLIST_REQUEST,
  POST_ENTRY_TO_PLAYLIST_SUCCESS,
  POST_PLAYLIST_FAILURE,
  POST_PLAYLIST_REQUEST,
  POST_PLAYLIST_SUCCESS,
  PUT_PLAYLIST_FAILURE,
  PUT_PLAYLIST_REQUEST,
  PUT_PLAYLIST_SUCCESS,
  REMOVE_ENTRY_FROM_PLAYLIST_FAILURE,
  REMOVE_ENTRY_FROM_PLAYLIST_REQUEST,
  REMOVE_ENTRY_FROM_PLAYLIST_SUCCESS,
} from "../actions/PlaylistActions";
import { ErrorMessage } from "../types";

type Playlist = any;

export type Playlists = DeepReadonly<{
  state: "" | "loaded";
  playlists: Playlist[];
  playlist: Playlist | null;
  url: string;
  error: ErrorMessage;
}>;

const initialState: Playlists = {
  state: "",
  playlists: [],
  playlist: null,
  url: "",
  error: "",
};

export default (state = initialState, action: any): Playlists => {
  switch (action.type) {
    case GET_CURRENT_USER_PLAYLISTS_REQUEST:
      return {
        ...state,
        state: "",
        playlists: [],
      };
    case GET_CURRENT_USER_PLAYLISTS_SUCCESS:
      return {
        ...state,
        state: "loaded",
        playlists: action.playlists,
      };
    case GET_CURRENT_USER_PLAYLISTS_FAILURE:
      return {
        ...state,
        playlists: [],
      };
    case GET_USER_PLAYLISTS_REQUEST:
      return {
        ...state,
        state: "",
        playlists: [],
      };
    case GET_USER_PLAYLISTS_SUCCESS:
      return {
        ...state,
        state: "loaded",
        playlists: action.playlists,
      };
    case GET_USER_PLAYLISTS_FAILURE:
      return {
        ...state,
        playlists: [],
      };
    case POST_ENTRY_TO_PLAYLIST_REQUEST:
      return {
        ...state,
      };
    case POST_ENTRY_TO_PLAYLIST_SUCCESS:
      return {
        ...state,
      };
    case POST_ENTRY_TO_PLAYLIST_FAILURE:
      return {
        ...state,
      };
    case REMOVE_ENTRY_FROM_PLAYLIST_REQUEST:
      return {
        ...state,
      };
    case REMOVE_ENTRY_FROM_PLAYLIST_SUCCESS:
      return {
        ...state,
      };
    case REMOVE_ENTRY_FROM_PLAYLIST_FAILURE:
      return {
        ...state,
      };
    case GET_PLAYLIST_REQUEST:
      return {
        ...state,
        state: "",
      };
    case GET_PLAYLIST_SUCCESS:
      return {
        ...state,
        state: "loaded",
        playlist: action.playlist,
      };
    case GET_PLAYLIST_FAILURE:
      return {
        ...state,
        playlist: null,
      };
    case POST_PLAYLIST_REQUEST:
      return {
        ...state,
      };
    case POST_PLAYLIST_SUCCESS:
      return {
        ...state,
      };
    case POST_PLAYLIST_FAILURE:
      return {
        ...state,
      };
    case PUT_PLAYLIST_REQUEST:
      return {
        ...state,
      };
    case PUT_PLAYLIST_SUCCESS:
      return {
        ...state,
      };
    case PUT_PLAYLIST_FAILURE:
      return {
        ...state,
      };
    case DELETE_PLAYLIST_REQUEST:
      return {
        ...state,
      };
    case DELETE_PLAYLIST_SUCCESS:
      return {
        ...state,
      };
    case DELETE_PLAYLIST_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
