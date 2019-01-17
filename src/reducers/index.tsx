import { combineReducers } from "redux";
import { reduxTokenAuthReducer } from "redux-token-auth";
import { DeepReadonly } from "utility-types";
import bookmarks, { Bookmarks } from "./bookmarks";
import comments, { Comments } from "./comments";
import entries, { Entries } from "./entries";
import playlists, { Playlists } from "./playlists";
import popup, { Popup } from "./popup";
import search, { Search } from "./search";
import stars, { Stars } from "./stars";
import toasts, { Toasts } from "./toasts";
import trend, { Trend } from "./trend";
import user, { User } from "./user";
import userIcon, { UserIcon } from "./userIcon";

export type Store = Readonly<{
  bookmarks: Bookmarks;
  comments: Comments;
  entries: Entries;
  stars: Stars;
  trend: Trend;
  user: User;
  playlists: Playlists;
  userIcon: UserIcon;
  toasts: Toasts;
  search: Search;
  popup: Popup;
  reduxTokenAuth: any;
}>;

const app: any = combineReducers<Store>({
  bookmarks,
  comments,
  entries,
  stars,
  trend,
  user,
  playlists,
  userIcon,
  toasts,
  search,
  popup,
  reduxTokenAuth: reduxTokenAuthReducer,
});

export default app;
