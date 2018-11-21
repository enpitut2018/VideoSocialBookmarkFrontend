import bookmarks from "./bookmarks";
import comments from "./comments";
import entries from "./entries";
import stars from "./stars";
import trend from "./trend";
import user from "./user";
import playlists from "./playlists";
import userIcon from "./userIcon";
import toasts from "./toasts";
import { combineReducers } from "redux";
import { reduxTokenAuthReducer } from "redux-token-auth";

const app = combineReducers({
  bookmarks,
  comments,
  entries,
  stars,
  trend,
  user,
  playlists,
  userIcon,
  toasts,
  reduxTokenAuth: reduxTokenAuthReducer
});

export default app;
