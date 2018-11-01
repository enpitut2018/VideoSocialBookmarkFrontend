import {
  GET_STAR_REQUEST,
  GET_STAR_SUCCESS,
  GET_STAR_FAILURE,
  POST_STAR_REQUEST,
  POST_STAR_SUCCESS,
  POST_STAR_FAILURE,
  DELETE_STAR_REQUEST,
  DELETE_STAR_SUCCESS,
  DELETE_STAR_FAILURE
} from "../actions/StarActions";

const initialState = {
  entries: [],
  isLoading: false
};

const getNewState = (state, entryId, enabled) => {
  let newState = {
    ...state
  };
  const idx = state.entries.findIndex(e => e.entryId === entryId);
  if (idx === -1) {
    newState.entries.push({
      entryId,
      enabled
    });
  } else {
    newState.entries[idx].enabled = enabled;
  }
  newState.isLoading = false;
  return newState;
};

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_STAR_REQUEST:
    return {
      ...state,
      isLoading: true
    };
  case GET_STAR_SUCCESS:
    return getNewState(state, action.entryId, action.enabled);

  case GET_STAR_FAILURE:
    return {
      ...state,
      isLoading: false
    };

  case POST_STAR_REQUEST:
    return {
      ...state,
      isLoading: true
    };
  case POST_STAR_SUCCESS:
    return getNewState(state, action.entryId, true);

  case POST_STAR_FAILURE:
    return {
      ...state,
      isLoading: false
    };
  case DELETE_STAR_REQUEST:
    return {
      ...state,
      isLoading: true
    };
  case DELETE_STAR_SUCCESS:
    return getNewState(state, action.entryId, false);

  case DELETE_STAR_FAILURE:
    return {
      ...state,
      isLoading: false
    };

  default:
    return state;
  }
};
