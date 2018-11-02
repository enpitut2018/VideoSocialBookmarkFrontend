import {
  GET_TREND_REQUEST,
  GET_TREND_SUCCESS,
  GET_TREND_FAILURE,
  SET_TREND_BOOKMARKED
} from "../actions/TrendActions";
import update from "immutability-helper";

const initialState = {
  hasLoaded: false,
  trend: [],
  url: "",
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_TREND_REQUEST:
    return {
      ...state,
      hasLoaded: false
    };
  case GET_TREND_SUCCESS:
    return {
      ...state,
      hasLoaded: true,
      trend: action.trend
    };
  case GET_TREND_FAILURE:
    return {
      ...state,
      hasLoaded: false,
      error: action.error
    };
  case SET_TREND_BOOKMARKED: {
    const index = state.trend.findIndex(entry => entry.id === action.entryId);
    return update(state, {
      trend: {
        [index]: {
          "bookmarked?": { $set: action.bookmarked }
        }
      }
    });
  }
  default:
    return state;
  }
};
