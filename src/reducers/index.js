import bookmarks from "./bookmarks";
import comments from "./comments";
import entries from "./entries";
import stars from "./stars";
import trend from "./trend";
import user from "./user";
import userIcon from "./userIcon";
import { combineReducers } from "redux";
import { reduxTokenAuthReducer } from "redux-token-auth";

const app = combineReducers({
  bookmarks,
  comments,
  entries,
  stars,
  trend,
  user,
  userIcon,
  reduxTokenAuth: reduxTokenAuthReducer
});

export default app;
