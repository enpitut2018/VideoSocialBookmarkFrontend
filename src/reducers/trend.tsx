import update from "immutability-helper";
import { DeepReadonly } from "utility-types";
import { GET_TREND_FAILURE, GET_TREND_REQUEST, GET_TREND_SUCCESS, SET_TREND_BOOKMARKED } from "../actions/TrendActions";
import { ErrorMessage } from "../types";

type Entry = any; // Entry id is better
type TrendDetails = any;

export type Trend = DeepReadonly<{
  hasLoaded: boolean;
  trend:
    | {
        data: Entry[];
      } & TrendDetails
    | null;
  url: URL | null;
  error: ErrorMessage | null;
}>;

const initialState: Trend = {
  hasLoaded: false,
  trend: null,
  url: null,
  error: null,
};

export default (state = initialState, action: any): Trend => {
  switch (action.type) {
    case GET_TREND_REQUEST:
      return {
        ...state,
        hasLoaded: false,
      };
    case GET_TREND_SUCCESS:
      return {
        ...state,
        hasLoaded: true,
        trend: action.trend,
      };
    case GET_TREND_FAILURE:
      return {
        ...state,
        hasLoaded: false,
        error: action.error,
      };
    case SET_TREND_BOOKMARKED: {
      const index: number = state.trend.data.findIndex((entry: any) => entry.id === action.entryId);
      return update(state, {
        trend: {
          data: {
            [index]: {
              "bookmarked?": { $set: action.bookmarked },
            },
          },
        },
      });
    }
    default:
      return state;
  }
};
