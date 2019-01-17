import { DeepReadonly } from "utility-types";
import {
  DELETE_STAR_FAILURE,
  DELETE_STAR_REQUEST,
  DELETE_STAR_SUCCESS,
  GET_STAR_FAILURE,
  GET_STAR_REQUEST,
  GET_STAR_SUCCESS,
  POST_STAR_FAILURE,
  POST_STAR_REQUEST,
  POST_STAR_SUCCESS,
} from "../actions/StarActions";

type Entry = any; // Entry id is better

export type Stars = DeepReadonly<{
  entries: Entry[];
  isLoading: boolean;
}>;

const initialState: Stars = {
  entries: [],
  isLoading: false,
};

function getNewState(state: Stars, entryId: number, enabled: boolean) {
  const entries: Entry[] = [];
  const idx: number = state.entries.findIndex(e => e.entryId === entryId);
  if (idx === -1) {
    entries.push({
      entryId,
      enabled,
    });
  } else {
    entries[idx].enabled = enabled;
  }
  const newState = {
    ...state,
    entries,
    isLoading: false,
  };
  return newState;
}

export default (state = initialState, action: any): Stars => {
  switch (action.type) {
    case GET_STAR_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_STAR_SUCCESS:
      return getNewState(state, action.entryId, action.enabled);

    case GET_STAR_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case POST_STAR_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case POST_STAR_SUCCESS:
      return getNewState(state, action.entryId, true);

    case POST_STAR_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case DELETE_STAR_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_STAR_SUCCESS:
      return getNewState(state, action.entryId, false);

    case DELETE_STAR_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
