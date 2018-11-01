import {
  GET_TREND_REQUEST,
  GET_TREND_SUCCESS,
  GET_TREND_FAILURE
} from "../actions/TrendActions";

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
  default:
    return state;
  }
};
