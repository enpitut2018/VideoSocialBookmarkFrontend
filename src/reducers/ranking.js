import { GET_RANKING } from "../actions/RankingActions";

const initialState = {
  hasLoaded: false,
  url: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RANKING:
      return {
        ...state,
        hasLoaded: true,
        ranking: action.ranking
      };
    default:
      return state;
  }
};
