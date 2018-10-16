import { GET_RANKING_REQUEST, GET_RANKING_SUCCESS, GET_RANKING_FAILURE } from "../actions/RankingActions";

const initialState = {
  hasLoaded: false,
  url: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RANKING_REQUEST:
      return {
        ...state,
        hasLoaded: false,
      };
    case GET_RANKING_SUCCESS:
      return {
        ...state,
        hasLoaded: true,
        ranking: action.ranking
      };
    case GET_RANKING_FAILURE:
      break;
    default:
      return state;
  }
};
